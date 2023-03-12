import "./InputNumber.scss";
import React from "react";
import { NumericFormat } from "react-number-format";
import { Controller, useFormContext } from "react-hook-form";

export type TInputNumberFormatProps = {
  defaultValue: number;
  name: string;
  id?: string;
};

const InputNumber: React.FC<TInputNumberFormatProps> = ({
  name,
  defaultValue,
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="InputNumber">
      <div className="InputNumber__input">
        <Controller
          render={({ field: { name, value, ref, onChange } }) => (
            <NumericFormat
              name={name}
              value={value}
              thousandSeparator
              getInputRef={ref}
              defaultValue={defaultValue}
              onValueChange={({ floatValue }) => {
                onChange(floatValue);
              }}
            />
          )}
          defaultValue={defaultValue}
          name={name}
          rules={{
            // required: { value: true, message: "Required" },
            pattern: { value: /^[0-9]*$/, message: "Nhập số lớn hơn 0" },
          }}
        />
      </div>
      {errors[name] && (
        <span className="InputNumber__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default InputNumber;
