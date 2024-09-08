import clsx from "clsx";
import style from "./Account.module.scss";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../reducers/userReducer";

function Account({ currentUser }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    username: "",
    password: "",
  });
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    if (currentUser) {
      const formattedDob = currentUser.dob
        ? new Date(currentUser.dob).toISOString().slice(0, 10)
        : "";
      setUser({ ...currentUser, dob: formattedDob });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (token) {
      await dispatch(updateUser({ token, user }));
    }
  };
  return (
    <div className={clsx(style.accountWrap)}>
      <div className={clsx(style.accountHead)}>
        <h4>My profile</h4>
        <p>Manage profile information to keep your account secure</p>
      </div>
      <Divider />

      <div className={clsx(style.accountForm)}>
        <div className={clsx(style.accountInfo)}>
          <form>
            <table>
              <tbody>
                <tr>
                  <td className={clsx(style.inputLabel)}>
                    <label htmlFor="username">Username</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <span>{user?.username}</span>
                  </td>
                </tr>
                <tr>
                  <td className={clsx(style.inputLabel)}>
                    <label htmlFor="email">Email</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <div className={clsx(style.inputBlock)}>
                      <input
                        id="email"
                        name="email"
                        value={user?.email}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={clsx(style.inputLabel)}>
                    <label htmlFor="phone">Phone</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <div className={clsx(style.inputBlock)}>
                      <input
                        id="phone"
                        name="phone"
                        value={user?.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={clsx(style.inputLabel)}>
                    <label htmlFor="dob">Dob</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <div className={clsx(style.inputBlock)}>
                      <input
                        id="dob"
                        name="dob"
                        value={user?.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={clsx(style.inputLabel)}>
                    <label htmlFor="gender">Gender</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <div className={clsx(style.inputBlock)}>
                      <input
                        id="gender"
                        name="gender"
                        value={user?.gender}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button onClick={handleSubmit} className={clsx(style.btnSave)}>
            Save
          </button>
        </div>
        <div className={clsx(style.accountAvatar)}>
          <div className={clsx(style.accountAvatarWrap)}>
            <img src="/assets/images/01.png" alt="avatar" />
          </div>
          <input
            className={clsx(style.inputFile)}
            type="file"
            accept=".jpg, .jpeg"
          />
          <button className={clsx(style.btnInput)}>Choose file</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
