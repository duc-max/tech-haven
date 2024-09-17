import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import clsx from "clsx";
import style from "./Button.module.scss";
import config from "../../config";
function ShowNowBtn({
  title = "Shop Now",
  icon = <IoIosArrowRoundForward style={{ fontSize: "20px" }} />,
  add = false,
}) {
  return (
    <>
      {add ? (
        <button className={clsx(style.showNowBtn)}>
          {title}
          {icon}
        </button>
      ) : (
        <Link to={config.router.shop} className={clsx(style.showNowBtn)}>
          {title}
          {icon}
        </Link>
      )}
    </>
  );
}

export default ShowNowBtn;
