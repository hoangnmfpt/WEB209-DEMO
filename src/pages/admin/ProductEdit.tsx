import { useForm } from "react-hook-form";
import style from "./ProductForm.module.scss";
import { TProduct } from "~/interfaces/TProduct";

type Props = {
  onEdit: (product: TProduct) => void;
};

const ProductEdit = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>();
  return (
    <div>
      <h1>Sửa sản phẩm</h1>
      <form className={style.form} onSubmit={handleSubmit(props.onEdit)}>
        <div className={style.formGroup}>
          <label htmlFor="title">Tên sản phẩm</label>
          <input
            className="form-control"
            type="text"
            id="title"
            {...register("title", { required: true, minLength: 3 })}
          />
          {errors.title && <span>Không được ít hơn 3 ký tự</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="price">Gía sản phẩm</label>
          <input
            className="form-control"
            type="number"
            id="price"
            {...register("price", { required: true, min: 0 })}
          />
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

        <button type="submit" className="btn btn-primary">
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
