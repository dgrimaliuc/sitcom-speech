import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test1: "test1",
    test2: "test2",
  },

  reducers: {
    setTest1: (state, action: PayloadAction<string>) => {
      state.test1 = action.payload;
    },
    setTest2: (state, action: PayloadAction<string>) => {
      state.test2 = action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;
