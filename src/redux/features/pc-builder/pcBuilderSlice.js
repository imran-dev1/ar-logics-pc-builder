import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   processor: [],
   motherboard: [],
   ram: [],
   power_supply_unit: [],
   storage_device: [],
   monitor: [],
};

export const pcBuilderSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      addComponent: (state, action) => {
         const category = action.payload.category;
         state.category = [];
         state.category.push(action.payload.product);
      },
      removeComponent: (state, action) => {
         const category = action.payload.category;
         state.category = [];
      },
   },
});

export const { addComponent, removeComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
