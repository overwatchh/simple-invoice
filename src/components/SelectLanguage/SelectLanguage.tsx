import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { nativeName: "language.english", code: "en" },
  { nativeName: "language.vietnamese", code: "vi" },
];
export enum LanguageCode {
  vi = "vi",
  en = "en",
}
const SelectLanguage = () => {
  const { t } = useTranslation();
  const [langCode, setLangCode] = useState<LanguageCode>(LanguageCode.en);
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e: RadioChangeEvent) => {
    const langCode = e.target.value;
    setLangCode(langCode);
    i18n.changeLanguage(langCode);
  };
  return (
    <Radio.Group value={langCode} onChange={handleChangeLanguage}>
      {langs.map((lang) => (
        <Radio.Button key={lang.code} value={lang.code}>
          {t(lang.nativeName)}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default SelectLanguage;
