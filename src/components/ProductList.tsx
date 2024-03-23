import { TProduct } from "@/interfaces/TProduct";
import React from "react";
import { Link } from "react-router-dom";

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
            <img src={product.thumbnail} alt={product.title} />
            <Link to={`/shop/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>Gia: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
