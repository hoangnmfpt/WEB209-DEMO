import React from "react";
import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/TProduct";

interface Props {
  products: TProduct[];
  onDelete: (id: number) => void;
}

const Dashboard: React.FC<Props> = ({ products, onDelete }) => {
  return (
    <div>
      <Link className="btn btn-primary" to={`/admin/add`}>
        Thêm sản phẩm
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
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
                <Link to={`/admin/edit/${product.id}`}>
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

export default Dashboard;
