import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create()(
  persist(
    (set, get) => ({
      token: "12345",
      setToken: (token) => set(() => ({ token })),
      
      // Product management
      products: [
        {
          id: 1,
          name: "Laptop Pro",
          price: 1299.99,
          description: "High-performance laptop with latest processor and graphics",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
        },
        {
          id: 2,
          name: "Wireless Headphones",
          price: 199.99,
          description: "Premium noise-cancelling wireless headphones",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
        },
        {
          id: 3,
          name: "Smartphone",
          price: 899.99,
          description: "Latest smartphone with advanced camera system",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
        }
      ],
      
      addProduct: (product) => set((state) => ({
        products: [...state.products, { ...product, id: Date.now() }]
      })),
      
      updateProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map(product => 
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      })),
      
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter(product => product.id !== id)
      })),
      
      getProductById: (id) => {
        const state = get();
        return state.products.find(product => product.id === id);
      }
    }),
    {
      name: "app-storage",
    }
  )
);

export default useAppStore;
