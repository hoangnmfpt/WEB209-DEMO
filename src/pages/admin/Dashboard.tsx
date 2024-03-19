// App.tsx
import { addProduct, getProducts } from "@/apis/product.service";
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";
import TProduct from "@/interfaces/TProduct";
import React, { useState, useEffect } from "react";
const DashBoard: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (product: TProduct) => {
    const newProduct = await addProduct(product);
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductList products={products} />
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default DashBoard;
