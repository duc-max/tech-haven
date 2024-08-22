import config from "../config/index";
import Home from "../pages/Guest/Home/Home";
import Login from "../pages/Guest/Login/Login";
import Signup from "../pages/Guest/Signup/Signup";

const publicRoutes = [
  { path: config.router.home, component: Home },
  { path: config.router.login, component: Login },
  { path: config.router.signup, component: Signup },
];

export { publicRoutes };
