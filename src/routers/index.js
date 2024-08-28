import React from "react";
import config from "../config/index";
import Home from "../pages/Guest/Home/Home";
import Login from "../pages/Guest/Login/Login";
import Signup from "../pages/Guest/Signup/Signup";
import About from "../pages/Guest/About/About";
const Shop = React.lazy(() => import("../pages/Guest/Shop/Shop"));

const publicRoutes = [
  { path: config.router.home, component: Home },
  { path: config.router.login, component: Login },
  { path: config.router.signup, component: Signup },
  { path: config.router.shop, component: Shop },
  { path: config.router.about, component: About },
];

export { publicRoutes };
