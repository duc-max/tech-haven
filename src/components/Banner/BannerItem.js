import clsx from "clsx";
import style from "./Banner.module.scss";
import { ViewAllBtn } from "../Button";

function BannerItem({ color }) {
  return (
    <div style={{ backgroundColor: color }} className={clsx(style.bannerBlock)}>
      <div className={clsx(style.bannerData)}>
        <div className={clsx(style.discountText)}>18% discount</div>
        <div className={clsx(style.bannerTitle)}>Smartphones & Accessories</div>
        <ViewAllBtn title={"Shop Now"} />
      </div>
      <img src="./assets/images/banner1.png" alt="banner" />
    </div>
  );
}
export default BannerItem;
