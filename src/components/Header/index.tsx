import cardleLogo from '../../assets/images/cardle-logo.png'
import instagram from "../../assets/icons/instagram-icon.svg";
import question from "../../assets/icons/question-icon.svg";
import "./Header.scss";

interface HeaderProps {
  handleClick: (bool: boolean) => void;
}

export default function Header({ handleClick }: HeaderProps) {
  return (
    <nav className="nav">
      <a
        href="https://boxbox.autos/"
        target="blank"
        className="nav__header--link"
      >
        <img className="nav__header "src={cardleLogo} alt="cardle" />
      </a>
      <div className="nav__links">
        <a
          href="https://www.instagram.com/play_cardle"
          target="blank"
          className="nav__link"
        >
          <img src={instagram} alt="instagram icon" className="nav__icon" />
        </a>
        <div className="nav__link" onClick={() => handleClick(true)}>
          <img src={question} alt="question icon" className="nav__icon" />
        </div>
      </div>
    </nav>
  );
}
