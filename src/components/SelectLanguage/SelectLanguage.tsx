import { Row, Col, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { nativeName: "English", code: "en" },
  { nativeName: "Vietnamese", code: "vi" },
];
export enum LanguageCode {
  vi = "vi",
  en = "en",
}
const SelectLanguage = () => {
  const [langCode, setLangCode] = useState<LanguageCode>(LanguageCode.en);
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e: RadioChangeEvent) => {
    const langCode = e.target.value;
    setLangCode(langCode);
    i18n.changeLanguage(langCode);
  };
  return (
    <Row justify="end">
      <Col span={24}>
        <Radio.Group value={langCode} onChange={handleChangeLanguage}>
          {langs.map((lang) => (
            <Radio.Button value={lang.code}>{lang.nativeName}</Radio.Button>
          ))}
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default SelectLanguage;
