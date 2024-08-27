import clsx from "clsx";
import style from "./Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { notification } from "antd";

import { addUser } from "../../../reducers/userReducer";
import config from "../../../config";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [mess, setMess] = useState("");
  const [addSuccess, setAddSuccess] = useState(false);
  useEffect(() => {
    let time;
    if (addSuccess) {
      api.success({
        message: "Sign Up Successful",
        description: "Your account has been created successfully!",
      });
      time = setTimeout(() => {
        navigate(config.router.login);
      }, 3000);
    }

    return () => clearTimeout(time);
  }, [addSuccess, api, navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(0|\+84)\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    };

    // Check for empty fields
    for (let key in user) {
      if (user[key].trim() === "") {
        newErrors[key] = "This field is required";
      }
    }

    if (user.password.length <= 6) {
      newErrors.password = "Password must be more than 6 characters";
    }

    if (user.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!validateEmail(user.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePhone(user.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (Object.values(newErrors).some((error) => error.length > 0)) {
      setErrors(newErrors);
      return;
    }

    setMess("");
    setErrors({
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    // Dispatch addUser action
    try {
      const resultAction = await dispatch(addUser(user));
      if (addUser.fulfilled.match(resultAction)) {
        setUser({
          name: "",
          phone: "",
          email: "",
          username: "",
          password: "",
        });
        setConfirmPassword("");
        setAddSuccess(true);
      } else {
        setMess(resultAction.payload || "Sign up failed");
      }
    } catch (err) {
      setMess("An unexpected error occurred.");
    }
  };

  return (
    <>
      {contextHolder}
      <div style={{ width: "100%", margin: "0 auto" }}>
        <div
          style={{ backgroundImage: "url(./assets/images/bg01.jpg)" }}
          className={clsx(style.signupContainer)}
        >
          <div className={clsx(style.signupWrap)}>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <span className={clsx(style.signupTitle)}>Create account</span>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>Your name</span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="text"
                    placeholder="First and last name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && (
                  <span className={clsx(style.error)}>{errors.name}</span>
                )}
              </div>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>Your phone</span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="text"
                    placeholder="Type your phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <span className={clsx(style.error)}>{errors.phone}</span>
                )}
              </div>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>Your email</span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="text"
                    placeholder="Type your email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <span className={clsx(style.error)}>{errors.email}</span>
                )}
              </div>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>Username</span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="text"
                    placeholder="Type your username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    autoComplete="username"
                  />
                </div>
                {errors.username && (
                  <span className={clsx(style.error)}>{errors.username}</span>
                )}
              </div>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>Password</span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="password"
                    placeholder="Type your password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </div>
                {errors.password && (
                  <span className={clsx(style.error)}>{errors.password}</span>
                )}
              </div>

              <div className={clsx(style.inputWrap)}>
                <span className={clsx(style.inputLabel)}>
                  Re-enter password
                </span>
                <div className={clsx(style.inputBlock)}>
                  <input
                    type="password"
                    placeholder="Re-type password"
                    name="re-password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    autoComplete="new-password"
                  />
                </div>
                {errors.confirmPassword && (
                  <span className={clsx(style.error)}>
                    {errors.confirmPassword}
                  </span>
                )}
              </div>

              {mess && <span className={clsx(style.error)}>{mess}</span>}
              <div className={clsx(style.hasAccount)}>
                <span>
                  Already have an account? <Link to="/login">Sign in</Link>
                </span>
              </div>
              <div className={clsx(style.btnLoginWrap)}>
                <button>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
