// ProductForm.tsx
import TProduct from "@/interfaces/TProduct";
import React, { useState } from "react";

interface Props {
  onAddProduct: (product: TProduct) => void;
}

const ProductForm: React.FC<Props> = ({ onAddProduct }) => {
  const [product, setProduct] = useState<TProduct | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.title]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Title"
        value={product?.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Product price"
        value={product?.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
