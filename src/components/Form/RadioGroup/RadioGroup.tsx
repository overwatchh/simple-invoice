import { TOption } from "@/types/form";
import { Radio } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type TRadioGroupProps = {
  options: TOption[];
  name: string;
  id?: string;
};
const RadioGroup: React.FC<TRadioGroupProps> = ({ name, options, id }) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="RadioGroup">
      <Controller
        render={({ field: { value, ref, onChange } }) => (
          <Radio.Group id={id} value={value} onChange={onChange} ref={ref}>
            {options.map((option) => (
              <Radio value={option.value}>{t(option.name)}</Radio>
            ))}
          </Radio.Group>
        )}
        name={name}
        rules={{
          required: { value: true, message: "Required" },
        }}
        defaultValue={options[0].value}
      />
      {errors[name] && (
        <span className="DatePicker__errMsg">
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default RadioGroup;
