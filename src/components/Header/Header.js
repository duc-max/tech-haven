import { Container, Nav, Navbar } from "react-bootstrap";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./Header.module.scss";
import config from "../../config/index";

function Header() {
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
                  <Nav.Link className={clsx(style.navLink)} href="">
                    Shop
                  </Nav.Link>
                  <Nav.Link className={clsx(style.navLink)} href="">
                    Categories
                  </Nav.Link>
                  <Nav.Link className={clsx(style.navLink)} href="">
                    About us
                  </Nav.Link>
                  <Nav.Link className={clsx(style.navLink)} href="">
                    Blogs
                  </Nav.Link>
                  <Nav.Link className={clsx(style.navLink)} href="">
                    Reviews
                  </Nav.Link>
                  <Nav.Link className={clsx(style.navLink)} href="">
                    Contact us
                  </Nav.Link>
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
              <Link to={config.router.login}>
                {" "}
                <CiUser className={clsx(style.headerIcon)} />
              </Link>
              <CiShoppingCart className={clsx(style.headerIcon)} />
            </div>
          </Fragment>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
