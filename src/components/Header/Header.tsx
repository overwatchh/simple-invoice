import "./Header.scss";
import logoImg from "@/assets/101DigitalLogo.png";
import SelectLanguage from "@/components/SelectLanguage";

function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img alt="101 digital logo" src={logoImg} />
      </div>
      <div className="Header__language">
        <SelectLanguage />
      </div>
    </div>
  );
}

export default Header;
