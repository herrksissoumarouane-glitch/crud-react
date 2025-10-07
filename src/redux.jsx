import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './components/ProductsListe.json';

const productSlice = createSlice({
  name: 'product',
  initialState: data.products,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        title: action.payload.title,
        price: action.payload.price
      };
      state.push(newProduct);
    },

    toggleProduct: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.title = action.payload.title;
        product.price = action.payload.price;
      }
    },

    deleteProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const store = configureStore({
  reducer: {
    product: productSlice.reducer
  }
});

export const { addProduct, toggleProduct, deleteProduct } = productSlice.actions;
