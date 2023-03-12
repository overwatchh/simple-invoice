import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "@/store/slices/form";
import { useForm, FormProvider, FieldValues } from "react-hook-form";

export type TFormProps = {
  name: string;
  children: JSX.Element[] | React.ReactNode[];
  onSubmit: (fieldValues: FieldValues) => void;
};

export type TForm = {
  name: string;
  fields: FieldValues;
};

const Form: React.FC<TFormProps> = ({ children, onSubmit, name }) => {
  const methods = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const onValid = (data: FieldValues) => {
    onSubmit(data);
    const form: TForm = {
      name,
      fields: data,
    };

    dispatch(updateForm(form));
  };
  return (
    <div className="Form">
      <FormProvider {...methods}>
        <form className={`.${name}`} onSubmit={methods.handleSubmit(onValid)}>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
