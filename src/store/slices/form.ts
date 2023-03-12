import { TForm } from "@/components/Form";
import { DATE_FORMAT } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
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
      if (action.payload.fields.hasOwnProperty("dateRange")) {
        const fromDate: dayjs.Dayjs = action.payload.fields.dateRange[0];
        const toDate: dayjs.Dayjs = action.payload.fields.dateRange[1];
        action.payload.fields.dateRange = [
          fromDate.format(DATE_FORMAT),
          toDate.format(DATE_FORMAT),
        ];
      }
      state[action.payload.name] = action.payload.fields;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
