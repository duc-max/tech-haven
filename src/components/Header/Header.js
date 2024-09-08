import { Container, Nav, Navbar } from "react-bootstrap";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Tooltip, Divider } from "antd";

import style from "./Header.module.scss";
import config from "../../config/index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

function Header() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((prev) => prev.users);
  const handleLogut = () => {
    dispatch(logout())
      .unwrap() // unwrap giúp lấy dữ liệu từ promise nếu thành công
      .then(() => {
        console.log("Logged out successfully");
        // Redirect hoặc thông báo cho người dùng sau khi logout
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <div className={clsx(style.headerContainer)}>
      <Navbar expand="lg" style={{ padding: "8px 0", height: "100%" }}>
        <Container>
          <Fragment>
            <>
              <Navbar.Brand href="" className={clsx(style.headerTitle)}>
                <Link to={config.router.home}>
                  <h1>TechHaven</h1>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className={clsx(style.navLink)} to={config.router.shop}>
                    Shop
                  </Link>
                  <Link className={clsx(style.navLink)} href="">
                    Categories
                  </Link>
                  <Link
                    className={clsx(style.navLink)}
                    to={config.router.about}
                  >
                    About us
                  </Link>
                  <Link className={clsx(style.navLink)} href="">
                    Blogs
                  </Link>
                  <Link className={clsx(style.navLink)} href="">
                    Reviews
                  </Link>
                  <Link className={clsx(style.navLink)} href="">
                    Contact us
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </>

            <div className="d-flex align-items-center">
              <div className={clsx(style.searchWrapper)}>
                <input type="text" placeholder="Search" />
                <span className={clsx(style.searchIcon)}>
                  <CiSearch />
                </span>
              </div>
              {isLogin ? (
                <Tooltip
                  trigger="click"
                  title={
                    <div>
                      <Link to={config.router.profile}>
                        <div className={clsx(style.userList)}>
                          <span>Profile</span>
                        </div>
                      </Link>
                      <div className={clsx(style.userList)}>
                        <span>Order</span>
                      </div>
                      <Divider style={{ margin: "2px 0" }} />
                      <div
                        onClick={handleLogut}
                        className={clsx(style.userList)}
                      >
                        <span>Logout</span>
                      </div>
                    </div>
                  }
                  color="#fff"
                  overlayStyle={{ width: 150 }}
                  overlayInnerStyle={{ padding: "0" }}
                >
                  <div className={clsx(style.userAvatar)}>
                    <img
                      src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                      alt="avatar"
                    />
                  </div>
                </Tooltip>
              ) : (
                <Link to={config.router.login}>
                  <CiUser className={clsx(style.headerIcon)} />
                </Link>
              )}
              <CiShoppingCart className={clsx(style.headerIcon)} />
            </div>
          </Fragment>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
