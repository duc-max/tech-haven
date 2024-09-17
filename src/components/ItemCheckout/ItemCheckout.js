import clsx from "clsx";
import style from "./ItemCheckout.module.scss";

function ItemCheckout() {
  return (
    <div className={clsx(style.itemWrap)}>
      <div className={clsx(style.itemInfo)}>
        <div className={clsx(style.itemImg)}>
          <img src="./assets/images/ip01.jpg" alt="item" />
          <span>1</span>
        </div>
        <div className={clsx(style.itemDescription)}>
          <p>Iphone 12promax</p>
          <span>Original price</span>
        </div>
      </div>
      <div className={clsx(style.itemPrice)}>415,000₫</div>
    </div>
  );
}

export default ItemCheckout;
