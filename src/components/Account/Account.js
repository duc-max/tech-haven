import clsx from "clsx";
import style from "./Account.module.scss";
import { toast } from "react-toastify";

import { Divider } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, updateUser } from "../../reducers/userReducer";
import { uploadImg } from "../../utils/upload_file";

function Account({ currentUser }) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    avatar: "",
    username: "",
    password: "",
  });
  const token = useSelector((state) => state.users.token);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    user?.avatar ||
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
  );

  useEffect(() => {
    if (currentUser) {
      const formattedDob = currentUser.dob
        ? new Date(currentUser.dob).toISOString().slice(0, 10)
        : "";
      setUser({ ...currentUser, dob: formattedDob });
      setPreviewUrl(
        currentUser.avatar ||
          "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
      );
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      gender: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
    }
  };

  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const img = selectedFile
        ? await uploadImg(selectedFile, "image", "avatar_preset")
        : user.avatar;
      if (token) {
        const resultAction = await dispatch(
          updateUser({ token, user: { ...user, avatar: img } })
        );
        if (updateUser.fulfilled.match(resultAction)) {
          dispatch(setCurrentUser(resultAction.payload));
          localStorage.setItem(
            "user_data",
            JSON.stringify({ userToken: token, user: resultAction.payload })
          );
          toast.success("Update profile successful");
        }
      }
    } catch (error) {
      console.log(error);
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
          <form onSubmit={handleSubmit}>
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
                    <label>Gender</label>
                  </td>
                  <td className={clsx(style.inputWrap)}>
                    <div className={clsx(style.radioBlock)}>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={user?.gender === "male"}
                          onChange={handleGenderChange}
                        />
                        Male
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={user?.gender === "female"}
                          onChange={handleGenderChange}
                        />
                        Female
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          checked={user?.gender === "other"}
                          onChange={handleGenderChange}
                        />
                        Other
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              className={clsx(style.inputFile)}
              ref={fileInputRef}
              type="file"
              accept=".jpg, .jpeg"
              onChange={handleFileChange}
            />
            <button className={clsx(style.btnSave)}>Save</button>
          </form>
        </div>
        <div className={clsx(style.accountAvatar)}>
          <div className={clsx(style.accountAvatarWrap)}>
            <img src={previewUrl} alt="avatar" />
          </div>

          <button className={clsx(style.btnInput)} onClick={handleChooseFile}>
            Choose file
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
