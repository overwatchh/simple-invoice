import { TForm } from "@/types/form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";

// Define a type for the slice state
interface FormSate {
  [name: string]: FieldValues;
}

// Define the initial state using that type
const initialState: FormSate = {};

export const formSlice = createSlice({
  name: "form",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<TForm>) => {
      state[action.payload.name] = action.payload.fields;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
