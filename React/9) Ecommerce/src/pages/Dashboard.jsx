import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductForm from "@/components/ProductForm";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from "@/components/ui/table"
import { apiRequest } from "../api";


const Dashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);


  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const deleteProduct = async (id) => {
    try {
      await apiRequest('DELETE', `product/delete?id=${id}`);
      setIsProductDeleted(!isProductDeleted)
    } catch (error) {
      console.error(error);
    }
  }

  const init = async () => {
    try {
      const response = await apiRequest('GET', 'product/allProducts');
      setAllProducts(response.data?.data)
    } catch (error) {
      console.log('error', error);
    }
  }

  const editProduct = async (item) => {
    setEditingProduct(item);
    setIsFormOpen(true)
  }


  useEffect(() => {
    init()
  }, [isProductDeleted, isFormOpen])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Product Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your product inventory with ease
            </p>
          </div>
          <Button onClick={handleAddProduct} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Product Form Modal */}
        <ProductForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          product={editingProduct}
        />


        {/* List Table */}
        <Table>
          <TableCaption>List Of Products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allProducts?.map((data) => (
              <TableRow key={data?._id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.image}</TableCell>
                <TableCell className='gap-4'>
                  <Button onClick={() => {
                    deleteProduct(data?._id)
                  }}>Delete</Button>
                  <Button
                    onClick={() => {
                      editProduct(data)
                    }}
                  >Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
