// ProductForm.tsx
import TProduct from "@/interfaces/TProduct";
import React, { useState } from "react";

interface Props {
  onAddProduct: (product: TProduct) => void;
}

const ProductForm: React.FC<Props> = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: TProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    onAddProduct(newProduct);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
