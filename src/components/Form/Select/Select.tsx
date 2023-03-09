import "./Select.scss";
import React, { useEffect } from "react";
import { Select as AntdSelect } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { removeDiacritics } from "@/utils/string";

export type TSelectOption = {
  label: string;
  value: string | number;
};

export type TSelectProps = {
  options: TSelectOption[];
  name: string;
  required?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  placeHolder?: string;
};

const Select: React.FC<TSelectProps> = ({
  name,
  options,
  placeHolder,
  defaultValue,
  required = false,
  disabled = false,
}) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, setValue, name]);

  return (
    <div className="Select">
      <Controller
        render={({ field: { value, ref, onChange } }) => (
          <AntdSelect
            className="Select__antdSelect"
            notFoundContent="Không tìm thấy"
            disabled={disabled}
            placeholder={placeHolder}
            allowClear
            showSearch
            options={options}
            filterOption={(key, option) => {
              const value = option?.value as string;
              const lowerCaseValue = removeDiacritics(
                value.toLocaleLowerCase()
              );
              const lowerCaseKey = removeDiacritics(key.toLocaleLowerCase());
              return lowerCaseValue.includes(lowerCaseKey);
            }}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            ref={ref}
          />
        )}
        defaultValue={defaultValue}
        name={name}
        rules={{
          required: { value: required, message: "Required" },
        }}
      />
      {errors[name] && (
        <span className="InputNumber__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default Select;
