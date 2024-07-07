import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload); // action.payload is the product object that we want to add to the cart,
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // action.payload is the product id that we want to remove from the cart,
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
