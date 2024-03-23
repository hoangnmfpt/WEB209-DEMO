import { TProduct } from "@/interfaces/TProduct";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  products: TProduct[];
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<Props> = ({ products, onDelete }) => {
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/shop/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(product.id as number)}
                >
                  Delete
                </button>{" "}
                <Link to={`/shop/edit/${product.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
