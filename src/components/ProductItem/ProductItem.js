import clsx from "clsx";

import style from "./ProductItem.module.scss";
function ProductItem() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className={clsx(style.productImg)}>
        <img src="./assets/images/ip01.jpg" alt="Product" />
      </div>

      <div className={clsx(style.productData)}>
        <h6>Iphone 15 Pro</h6>
        <span>$ 559.00 USD</span>
      </div>
    </div>
  );
}

export default ProductItem;
