import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_USER,
  LOGIN,
  LOGOUT,
  GET_CURRENT_USER,
  UPDATE_USER,
} from "../api/authApi";

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
      const response = await axios.post(LOGIN, { username, password });
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ token, user }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${UPDATE_USER}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      } else if (error.response?.status === 404) {
        return rejectWithValue("No user found");
      } else {
        return rejectWithValue("Failed to fetch user");
      }
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${GET_CURRENT_USER}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      } else if (error.response?.status === 401) {
        return rejectWithValue("Invalid Token");
      } else {
        return rejectWithValue("Failed to fetch user");
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("user_data");
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
    token: null,
  },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
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
        const { token, user } = action.payload;
        state.status = "success";
        state.token = token;
        state.currentUser = user;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser = action.payload?.data;
        state.isLogin = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.isLogin = false;
        state.currentUser = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "success";
        state.currentUser = null;
        state.isLogin = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setIsLogin, setToken, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
