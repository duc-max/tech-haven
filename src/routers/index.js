import Home from "../pages/Guest/Home/Home";
import config from "../config/index";

const publicRoutes = [{ path: config.router.home, component: Home }];

export { publicRoutes };
