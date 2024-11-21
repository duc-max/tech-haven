import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fragment, Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { publicRoutes } from "../src/routers";
import DefaultLayout from "../src/layout/DefaultLayout";
import { setCurrentUser, setIsLogin, setToken } from "./reducers/userReducer";
import DashboardLayout from "./layout/Dashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user_data"));
    if (storedData) {
      const { userToken, user } = storedData;
      dispatch(setToken(userToken));
      dispatch(setCurrentUser(user));
      dispatch(setIsLogin(true));
    } else {
      dispatch(setIsLogin(false));
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <div className="App">
          <ToastContainer />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                } else if (route.header === null) {
                  Layout = DashboardLayout;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
