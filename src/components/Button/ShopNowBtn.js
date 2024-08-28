import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import clsx from "clsx";
import style from "./Button.module.scss";
import config from "../../config";
function ShowNowBtn() {
  return (
    <>
      <Link to={config.router.shop} className={clsx(style.showNowBtn)}>
        Shop now
        <IoIosArrowRoundForward style={{ fontSize: "20px" }} />
      </Link>
    </>
  );
}

export default ShowNowBtn;
