import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/TProduct";

type Props = {
  products: TProduct[];
};
const Shop = (props: Props) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <Link to={`/shop/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
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

export default Shop;
