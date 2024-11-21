import React from "react";
import config from "../config/index";
import Home from "../pages/Guest/Home/Home";
import Login from "../pages/Guest/Login/Login";
import Signup from "../pages/Guest/Signup/Signup";
import About from "../pages/Guest/About/About";
import Profile from "../pages/Customer/Profile/Profile";
import ProductDetail from "../pages/Guest/Product-detail/Product-detail";
import Cart from "../pages/Guest/Cart/Cart";
import Checkout from "../pages/Guest/Checkout/Checkout";
import Success from "../pages/Success/Success";
import HomeAdmin from "../pages/Admin/Home/home";
const Shop = React.lazy(() => import("../pages/Guest/Shop/Shop"));

const publicRoutes = [
  { path: config.router.home, component: Home },
  { path: config.router.login, component: Login },
  { path: config.router.signup, component: Signup },
  { path: config.router.shop, component: Shop },
  { path: config.router.about, component: About },
  { path: config.router.profile, component: Profile },
  { path: config.router.productDetail, component: ProductDetail },
  { path: config.router.cart, component: Cart },
  { path: config.router.checkout, component: Checkout, layout: null },
  { path: config.router.success, component: Success, layout: null },
  { path: config.router.admin, component: HomeAdmin, header: null },
];

export { publicRoutes };
