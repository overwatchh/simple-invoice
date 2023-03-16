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
        //convert dayjs to yyyy-mm-dd
        const fromDate: dayjs.Dayjs = action.payload.fields.dateRange[0];
        const toDate: dayjs.Dayjs = action.payload.fields.dateRange[1];
        const invoiceDate: dayjs.Dayjs = action.payload.fields.invoiceDate;
        const dueDate: dayjs.Dayjs = action.payload.fields.invoiceDate;
        console.log("invoiceDate", action.payload.fields.invoicdeDte);
        console.log("dueDate", action.payload.fields.dueDate);
        action.payload.fields.dateRange = [
          fromDate.format(DATE_FORMAT),
          toDate.format(DATE_FORMAT),
        ];
        action.payload.fields.invoiceDate = invoiceDate.format(DATE_FORMAT);
        action.payload.fields.dueDate = dueDate.format(DATE_FORMAT);
      }
      state[action.payload.name] = action.payload.fields;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
