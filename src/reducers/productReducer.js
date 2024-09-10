import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ page }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_GET_PRODUCT}?page=${page}`
    );
    return response.data;
  }
);

export const getProductsBest = createAsyncThunk(
  "products/getProductsBest",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_GET_PRODUCT_BESTSELLING}`
    );
    return response.data;
  }
);

export const getProductsLatest = createAsyncThunk(
  "products/getProductsLatest",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_GET_PRODUCT_LATEST}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productBest: [],
    productsLatest: [],
    total: 0,
    totalPage: 0,
    page: 1,
    perPage: 10,
    status: "idle",
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.data;
        state.total = action.payload.total;
        state.totalPage = action.payload.total_page;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })
      .addCase(getProductsBest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsBest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productBest = action.payload;
      })
      .addCase(getProductsBest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })
      .addCase(getProductsLatest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productsLatest = action.payload;
      });
  },
});
export const { setPage, setPerPage } = productSlice.actions;

export default productSlice.reducer;
