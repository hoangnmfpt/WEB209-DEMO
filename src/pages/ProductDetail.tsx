import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "~/apis/product.service";
import { TProduct } from "~/interfaces/TProduct";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const product = await getProduct(+id!);
      setProduct(product);
    };
    fetchProducts();
  }, [id]);
  return (
    <div>
      <h1>Product Detail</h1>
      {product && (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <p>Product Name: {product.title}</p>
          <p>Product Price: {product.price || "Dang cap nhat!"}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
