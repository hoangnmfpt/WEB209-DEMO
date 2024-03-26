import { useForm } from "react-hook-form";
import style from "./ProductForm.module.scss";
import { TProduct } from "~/interfaces/TProduct";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

type Props = {
  onAdd: (product: TProduct) => void;
};

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
});

const ProductAdd = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct),
  });
  const onSubmit = (data: TProduct) => {
    props.onAdd(data);
    navigate("/admin");
  };
  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formGroup}>
          <label htmlFor="title">Tên sản phẩm</label>
          <input
            className="form-control"
            type="text"
            id="title"
            {...register("title", { required: true, minLength: 3 })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="price">Gía sản phẩm</label>
          <input
            className="form-control"
            type="number"
            id="price"
            {...register("price", { required: true, min: 0 })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="description">Mô tả sản phẩm</label>
          <input
            className="form-control"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
