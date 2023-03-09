import "./Input.scss";
import React from "react";
import { useFormContext } from "react-hook-form";

export type TInputProps = {
  type: "text" | "number" | "textarea";
  name: string;
  id?: string;
  errorMessage?: string;
  keyValue?: string;
  value?: string | number;
  required?: boolean;
};

const Input: React.FC<TInputProps> = ({
  name,
  type,
  keyValue = "",
  id,
  errorMessage = "",
  value,
  required = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="Input">
      <input
        value={value}
        autoComplete="off"
        className="Input__input"
        key={keyValue}
        type={type}
        id={id}
        {...register(name, {
          required: { value: required, message: "Required" },
        })}
      />
      {(errors[name] || errorMessage) && (
        <span className="Input__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
      {errorMessage && <span className="Input__errMsg">{errorMessage}</span>}
    </div>
  );
};

export default Input;
