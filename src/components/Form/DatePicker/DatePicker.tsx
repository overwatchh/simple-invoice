import { DATE_FORMAT } from "@/constants";
import { DatePicker as AntdDatePicker } from "antd";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

export type TDatePickerProps = {
  name: string;
  defaultValue: dayjs.Dayjs;
  id?: string;
};

const DatePicker: React.FC<TDatePickerProps> = ({ name, defaultValue, id }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="DatePicker">
      <Controller
        render={({ field: { value, ref, onChange } }) => (
          <AntdDatePicker
            id={id}
            onChange={onChange}
            value={value}
            ref={ref}
            picker="date"
            format={DATE_FORMAT}
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
        <span className="DatePicker__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default DatePicker;
