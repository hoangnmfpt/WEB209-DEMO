import { TProduct } from "~/interfaces/TProduct";
import instance from ".";

export const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (id: number) => {
  try {
    await instance.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product: TProduct) => {
  try {
    const { data } = await instance.post(`/products`, product);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
