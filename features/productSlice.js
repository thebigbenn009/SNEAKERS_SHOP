import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProductId: null,
  selectedQuantity: 1,
  products: [
    {
      id: 1,
      name: "fall limited edition sneakers",
      details:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250,
      discount: 50,
      finalPrice: null,
      images: [],
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId(state, action) {
      state.selectedProductId = action.payload;
    },
    setSelectedQuantity(state, action) {
      state.selectedQuantity = action.payload;
    },
    resetSelectedProduct(state) {
      state.selectedProductId = null;
      state.selectedQuantity = 1;
    },
    updateProductList(state, action) {
      state.products = action.payload;
    },
    applyDiscount(state, action) {
      //i no deh use am for the code
      const { productId } = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.finalPrice = product.price * (1 - product.discount / 100);
      }
    },
  },
});

export const productActions = productSlice.actions;
