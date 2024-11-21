import clsx from "clsx";
import style from "./ItemCheckout.module.scss";

function ItemCheckout({ product }) {
  return (
    <div className={clsx(style.itemWrap)}>
      <div className={clsx(style.itemInfo)}>
        <div className={clsx(style.itemImg)}>
          <img src={product?.images} alt="item" />
          <span>{product?.quantity}</span>
        </div>
        <div className={clsx(style.itemDescription)}>
          <p>{product?.productName}</p>
          <span>Original price</span>
        </div>
      </div>
      <div className={clsx(style.itemPrice)}>{product?.price} $</div>
    </div>
  );
}

export default ItemCheckout;
