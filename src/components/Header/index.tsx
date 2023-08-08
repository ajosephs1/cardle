import bbLogo from "../../assets/images/boxbox_logo.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import question from "../../assets/icons/question-icon.svg";
import chart from "../../assets/icons/chart-icon.svg";
import "./Header.scss";


interface headerProps {
  onClick: () => any
}
export default function Header({onClick}: headerProps) {



  return (
    <nav className="nav">
      <a href="https://www.boxbox.autos/" className="nav__logo">
        <img src={bbLogo} alt="BoxBox logo" className="nav__logo--img" />
      </a>
      <h1 className="nav__header">CAR-DLE</h1>
      <div className="nav__links">
        <div className="nav__link">
          <img src={instagram} alt="instagram icon" className="nav__icon" />
        </div>
        <div className="nav__link">
          <img src={question} alt="question icon" className="nav__icon" />
        </div>
        <div className="nav__link">
          <img src={chart} alt="chart icon" className="nav__icon" />
        </div>
      </div>
    </nav>
  );
}
