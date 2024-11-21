import { SearchOutlined } from "@ant-design/icons";
import { IoIosNotificationsOutline } from "react-icons/io";

import style from "./headerAdmin.module.scss";

function HeaderAdmin() {
  return (
    <div className={style.headAdminWrap}>
      <div className={style.inputWrap}>
        <input type="text" placeholder="Search" />
        <SearchOutlined style={{ fontSize: "22px", color: "gray" }} />
      </div>
      <div className={style.headRight}>
        <div>
          <div className={style.notifiIcon}>
            <IoIosNotificationsOutline fontSize={"36px"} />
            <div className={style.notification}>4</div>
          </div>
        </div>

        <div className={style.avatar}>
          <img src="/assets/images/team3.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
