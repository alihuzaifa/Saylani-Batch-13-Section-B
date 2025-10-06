import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { apiRequest } from "../api";

const ProductForm = ({ isOpen, onClose, product }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters")
      .required("Product name is required"),
    price: Yup.number()
      .min(0.01, "Price must be greater than 0")
      .required("Price is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .max(500, "Description must be less than 500 characters")
      .required("Description is required"),
    // image: Yup.string()
    //   .required("Image URL is required")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      image: null
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // const formData = new FormData();
        // formData.append('name', values?.name)
        // formData.append('price', values?.price)
        // formData.append('description', values?.description)
        // formData.append('image', values?.image)
        // const response = await apiRequest('POST', 'product/create', formData);
        const data = {
          name: values.name,
          price: values?.price,
          description: values?.description
        }
        if (product) {
          await apiRequest('PUT', 'product/create', data);
        } else {
          await apiRequest('POST', 'product/create', data);
        }
        formik.resetForm()
        onClose();
        toast.success(product ? "Product updated successfully!" : "Product added successfully!");
      } catch {
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  useEffect(() => {
    if (product) {
      formik.setFieldValue('name', product?.name)
      formik.setFieldValue('price', product?.price)
      formik.setFieldValue('description', product?.description)
    }
  }, [product])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {product ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter product name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.name && formik.errors.name ? "border-red-500" : ""}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.price && formik.errors.price ? "border-red-500" : ""}
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-sm text-red-500">{formik.errors.price}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Enter product description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${formik.touched.description && formik.errors.description ? "border-red-500" : ""
                }`}
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-sm text-red-500">{formik.errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("image", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
              className={formik.touched.image && formik.errors.image ? "border-red-500" : ""}
            />
            {/* {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-500">{formik.errors.image}</p>
            )} */}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !formik.isValid}
            >
              {isSubmitting ? "Saving..." : (product ? "Update" : "Add")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
