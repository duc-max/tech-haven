import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADD_USER, LOGIN, LOGOUT } from "../api/authApi";

export const addUser = createAsyncThunk(
  "user/addUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ADD_USER}`, user);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      } else if (error.response?.status === 400) {
        return rejectWithValue("Username or phone or email taken");
      } else {
        return rejectWithValue("Sign up failed");
      }
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${LOGIN}`, { username, password });
      return response.data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      } else if (error.response?.status === 400) {
        return rejectWithValue("Invalid Username or Password");
      } else {
        return rejectWithValue("Login failed");
      }
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${LOGOUT}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Đảm bảo token là hợp lệ
          },
        }
      );
      // Xóa token khỏi localStorage sau khi logout thành công
      localStorage.removeItem("token");
      return response.data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      } else if (error.response?.status === 403) {
        return rejectWithValue("Forbidden: Token may be invalid or expired");
      } else {
        return rejectWithValue("Logout failed");
      }
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
    currentUser: null,
    isLogin: false,
  },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.messages || action.error.message;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser = action.payload?.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "success";
        state.currentUser = null;
        state.isLogin = false; // Set isLogin to false on successful logout
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setIsLogin } = userSlice.actions;
export default userSlice.reducer;
