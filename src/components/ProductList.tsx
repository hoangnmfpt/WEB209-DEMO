// ProductList.tsx
import TProduct from "@/interfaces/TProduct";
import React from "react";

interface Props {
  products: TProduct[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
