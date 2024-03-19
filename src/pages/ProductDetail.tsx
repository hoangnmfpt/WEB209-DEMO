import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams();
  console.log(params);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
