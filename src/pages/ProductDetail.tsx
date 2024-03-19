import { getProduct, getProducts } from "@/apis/product.service";
import TProduct from "@/interfaces/TProduct";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams();
  const [product, setProduct] = useState<TProduct>({
    id: 0,
    name: "",
    price: 0,
  });
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
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Name: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
