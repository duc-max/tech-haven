import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { CiUser, CiLock } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import style from "./Login.module.scss";
import config from "../../../config";
import {
  login,
  setIsLogin,
  setToken,
  setCurrentUser,
} from "../../../reducers/userReducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password }));
      if (login.fulfilled.match(resultAction)) {
        const { token, user } = resultAction.payload;
        localStorage.setItem("token", token);
        localStorage.setItem(
          "user_data",
          JSON.stringify({ userToken: token, user })
        );
        console.log(user);
        dispatch(setToken(token));
        dispatch(setCurrentUser(user));
        dispatch(setIsLogin(true));
        if (user.role === "admin") {
          navigate(config.router.admin);
        } else {
          navigate(config.router.home);
        }
      } else {
        setMess("Username or password invalid");
      }
    } catch (error) {
      setMess("Username or password invalid");
    }
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <div
        style={{ backgroundImage: "url(./assets/images/bg01.jpg)" }}
        className={clsx(style.loginContainer)}
      >
        <div className={clsx(style.loginWrap)}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <span className={clsx(style.loginTitle)}>Login</span>
            <div className={clsx(style.inputWrap)}>
              <span className={clsx(style.inputLabel)}>Username</span>
              <div className={clsx(style.inputBlock)}>
                <CiUser className={clsx(style.inputIcon)} />
                <input
                  type="text"
                  placeholder="Type your username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className={clsx(style.inputWrap)}>
              <span className={clsx(style.inputLabel)}>Password</span>
              <div className={clsx(style.inputBlock)}>
                <CiLock className={clsx(style.inputIcon)} />
                <input
                  type="password"
                  placeholder="Type your password"
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {mess && (
              <div>
                <span style={{ color: "red" }}>{mess}</span>
              </div>
            )}
            <div className={clsx(style.forgotPass)}>
              <Link>Forgot password?</Link>
            </div>

            <div className={clsx(style.btnLoginWrap)}>
              <button type="submit">Login</button>
            </div>

            <div className={clsx(style.formText, "text-center")}>
              <span>Or Sign Up Using</span>
            </div>
            <div className={clsx(style.loginGroup)}>
              <a href="/" style={{ backgroundColor: "#3b5998" }}>
                <FaFacebookF />
              </a>
              <a href="/" style={{ backgroundColor: "#ea4335" }}>
                <FaGoogle />
              </a>
              <a href="/" style={{ backgroundColor: "#000" }}>
                <FaApple />
              </a>
            </div>
            <div className={clsx(style.signupWrap)}>
              <span>Or Sign Up Using</span>
              <Link to={config.router.signup}>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
