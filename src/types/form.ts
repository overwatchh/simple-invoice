import { FieldValues } from "react-hook-form";

export type TForm = {
  name: string;
  fields: FieldValues;
};

export type LoginFormField = {
  userName: string;
  password: string;
};

export type TOption = {
  name: string;
  value: string;
};
