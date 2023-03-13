import "./Input.scss";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type TInputProps = {
  type: "text" | "textarea" | "password" | "email";
  name: string;
  id?: string;
  errorMessage?: string;
  keyValue?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
};

const Input: React.FC<TInputProps> = ({
  name,
  type,
  keyValue = "",
  id,
  errorMessage = "",
  defaultValue = "",
  value,
  required = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className="Input">
      <input
        value={value}
        defaultValue={defaultValue}
        autoComplete="off"
        className="Input__input"
        key={keyValue}
        type={type}
        id={id}
        {...register(name, {
          required: { value: required, message: t("form_validate.required") },
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
