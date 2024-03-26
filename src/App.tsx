import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { addProduct, getProducts, removeProduct } from "./apis/product.service";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import ProductAdd from "./pages/admin/ProductAdd";
import { TProduct } from "./interfaces/TProduct";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const handleDelete = async (id: number) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirm) {
      await removeProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    }
  };
  const handleAdd = (product: TProduct) => {
    (async () => {
      const newProduct = await addProduct(product);
      setProducts([...products, newProduct]);
    })();
  };

  const handleEdit = (product: TProduct) => {};
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Shop products={products} />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin">
            <Route
              index
              element={
                <Dashboard products={products} onDelete={handleDelete} />
              }
            />
            <Route
              path="/admin/add"
              element={<ProductAdd onAdd={handleAdd} />}
            />
            <Route
              path="/admin/edit/:id"
              element={<ProductEdit onEdit={handleEdit} />}
            />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
