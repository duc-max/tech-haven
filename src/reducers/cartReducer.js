import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk("carts/fetchCart", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_GET_CART}`);
  return res.data;
});

export const addToCart = createAsyncThunk("carts/addToCart", async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_ADD_TO_CART}`,
    data
  );
  return res.data;
});

export const plusItem = createAsyncThunk("carts/plusItem", async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_CART_PLUS_ITEM}`,
    data
  );
  return res.data;
});

export const minusItem = createAsyncThunk("carts/minusItem", async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_CART_MINUS_ITEM}`,
    data
  );
  return res.data;
});

export const removeItem = createAsyncThunk(
  "carts/removeItem",
  async ({ uid, pid }, { rejectWithValue }) => {
    try {
      console.log(pid);
      const res = await axios.delete(
        `${process.env.REACT_APP_API_CART_REMOVE_ITEM}${uid}/${pid}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    status: "idle",
    error: null,
    cartItem: null,
    addSuccess: false,
  },
  reducers: {
    setAddSuccess: (state, action) => {
      state.addSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "success";
        state.cartItem = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.cartItem = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carts = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })
      .addCase(minusItem.fulfilled, (state, action) => {
        state.status = "success";
        const updatedCart = state.carts.map((item) =>
          item.productId === action.payload.productId &&
          item.userId === action.payload.userId
            ? action.payload
            : item
        );
        state.carts = updatedCart;
      })
      .addCase(minusItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.cartItem = null;
      })
      .addCase(plusItem.fulfilled, (state, action) => {
        state.status = "success";
        const updatedCart = state.carts.map((item) =>
          item.productId === action.payload.productId &&
          item.userId === action.payload.userId
            ? action.payload
            : item
        );
        state.carts = updatedCart;
      })
      .addCase(plusItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.cartItem = null;
      });
  },
});
export const { setAddSuccess } = cartSlice.actions;

export default cartSlice.reducer;
