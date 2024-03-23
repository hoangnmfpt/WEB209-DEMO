// App.tsx
import { addProduct, deleteProduct, getProducts } from "@/apis/product.service";
import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import { TProduct } from "@/interfaces/TProduct";
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

  const handleDeleteProduct = async (id: number) => {
    const confirmValue = window.confirm("Are you sure?");
    if (!confirmValue) return;
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h2>Product management</h2>
      <div className="row">
        <div className="col">
          <ProductTable products={products} onDelete={handleDeleteProduct} />
        </div>
        <div className="col">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
