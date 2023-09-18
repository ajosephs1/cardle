// import bbLogo from "../../assets/images/boxbox_logo.svg";
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
        <h1 className="nav__header">CAR-DLE</h1>
        <p className="nav__header--tiny">powered by BoxBox</p>
      </a>
      <div className="nav__links">
        <a
          href="https://www.instagram.com/boxbox_carclub/"
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
