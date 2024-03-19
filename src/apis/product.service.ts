import TProduct from "@/interfaces/TProduct";
import instance from ".";

export const getProducts = async (): Promise<TProduct[]> => {
  const { data } = await instance.get("/products");
  return data;
};

// Hàm thêm sản phẩm mới vào server
export const addProduct = async (product: TProduct): Promise<TProduct> => {
  const { data } = await instance.post("/products", product);
  return data;
};

// Hàm cập nhật thông tin sản phẩm trên server
export const updateProduct = async (
  id: number,
  updatedProduct: TProduct
): Promise<TProduct> => {
  const { data } = await instance.put(`/products/${id}`, updatedProduct);
  return data;
};

// Hàm xóa sản phẩm khỏi server
export const deleteProduct = async (id: number): Promise<void> => {
  await instance.delete(`/products/${id}`);
};
