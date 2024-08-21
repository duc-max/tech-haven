import clsx from "clsx";
import style from "./Button.module.scss";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

function ViewAllBtn({ title }) {
  return (
    <>
      <Link className={clsx(style.link)}>
        <div>{title}</div>
        <IoMdArrowForward className={clsx(style.viewIcon)} />
      </Link>
    </>
  );
}

export default ViewAllBtn;
