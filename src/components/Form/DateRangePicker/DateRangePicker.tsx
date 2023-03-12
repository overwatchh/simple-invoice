import "./AntdCustomize.scss";
import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { RangeValue } from "rc-picker/lib/interface";
import { DATE_FORMAT } from "@/constants";

const { RangePicker } = DatePicker;
const dateFormatList = [DATE_FORMAT, DATE_FORMAT];
export type TDateRangePickerProps = {
  name: string;
  defaultValue: RangeValue<dayjs.Dayjs>;
};

const DateRangePicker: React.FC<TDateRangePickerProps> = ({
  name,
  defaultValue,
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="DateRangePicker">
      <Controller
        render={({ field: { value, ref, onChange } }) => (
          <RangePicker
            onChange={onChange}
            value={value}
            ref={ref}
            picker="date"
            format={dateFormatList}
            defaultValue={defaultValue}
          />
        )}
        name={name}
        rules={{
          required: { value: true, message: "Required" },
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

export default DateRangePicker;
