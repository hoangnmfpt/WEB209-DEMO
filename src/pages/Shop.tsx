import { getProducts } from "@/apis/product.service";
import ProductList from "@/components/ProductList";
import TProduct from "@/interfaces/TProduct";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Shop;
