import { getProduct } from "@/apis/product.service";
import { TProduct } from "@/interfaces/TProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const product = await getProduct(`${params.productId}`);
      console.log(product);
      setProduct(product);
    };
    fetchProducts();
  }, [params]);
  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <>
          <p>Product ID: {product.id}</p>
          <p>Product Name: {product.title}</p>
          <p>Product Price: {product.price || "Dang cap nhat!"}</p>
        </>
      ) : (
        "Updating..."
      )}
    </div>
  );
};

export default ProductDetail;
