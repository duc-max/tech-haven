import clsx from "clsx";
import style from "./Nav.module.scss";
import { MdEdit } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

function Nav({ user }) {
  return (
    <div className={clsx(style.navWrap)}>
      <div className={clsx(style.userInfoWrap)}>
        <div className={clsx(style.userImg)}>
          <img
            src={
              user?.avatar ||
              "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            }
            alt="avatar"
          />
        </div>
        <div className={clsx(style.userData)}>
          <p>{user?.name}</p>
          <div className={clsx(style.editProfileBtn)}>
            <MdEdit />
            <span>Edit profile</span>
          </div>
        </div>
      </div>
      <div className={clsx(style.navList)}>
        <div className={clsx(style.navItem)}>
          <FaRegUser style={{ color: "#6d93cd" }} />
          <span>My account</span>
        </div>
        <div className={clsx(style.navItem)}>
          <BiPurchaseTag style={{ color: "#6d93cd", fontSize: "18px" }} />
          <span>Purchase</span>
        </div>
        <div className={clsx(style.navItem)}>
          <IoIosNotificationsOutline
            style={{ color: "#f63", fontSize: "20px" }}
          />
          <span>Notification</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
