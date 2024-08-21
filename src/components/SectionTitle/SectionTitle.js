import clsx from "clsx";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import style from "./SectionTitle.module.scss";
import { ViewAllBtn } from "../Button";

function SectionTitle({ title, next }) {
  return (
    <div className={clsx(style.sectionTitle)}>
      <div className={clsx(style.sectionHead)}>
        <h2>{title}</h2>
        <div>
          {next ? (
            <div>
              <button className={clsx(style.btnChange)}>
                <IoIosArrowRoundBack className={clsx(style.icon)} />
              </button>
              <button className={clsx(style.btnChange)}>
                <IoIosArrowRoundForward className={clsx(style.icon)} />
              </button>
            </div>
          ) : (
            <ViewAllBtn title={"View all"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
