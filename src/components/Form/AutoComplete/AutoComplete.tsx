import "./AutoComplete.scss";
import React from "react";
import { AutoComplete as AntdAutoComplete } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type TAutoCompleteOption = {
  label: string;
  value: string;
};

export type TAutoCompleteProps = {
  onSelect?: (value: string) => void;
  options: TAutoCompleteOption[];
  name: string;
  required?: boolean;
  defaultValue?: string;
  placeHolder?: string;
};

const AutoComplete: React.FC<TAutoCompleteProps> = ({
  name,
  options,
  placeHolder,
  defaultValue,
  required = false,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="AutoComplete">
      <Controller
        render={({ field: { value, ref, onChange } }) => (
          <AntdAutoComplete
            className="AutoComplete__antdAutoComplete"
            placeholder={placeHolder}
            notFoundContent="Không tìm thấy"
            allowClear
            options={options}
            onChange={onChange}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            value={value}
            defaultValue={defaultValue}
            ref={ref}
          />
        )}
        name={name}
        rules={{
          required: { value: required, message: "Required" },
        }}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <span className="InputNumber__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default AutoComplete;
