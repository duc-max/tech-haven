import clsx from "clsx";

import style from "./ProductItem.module.scss";
function ProductItem({ product }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className={clsx(style.productImg)}>
        <img src={product?.images[0]} alt={product?.name} />
      </div>

      <div className={clsx(style.productData)}>
        <h6>{product?.name}</h6>
        <span>$ {product?.price} USD</span>
      </div>
    </div>
  );
}

export default ProductItem;
