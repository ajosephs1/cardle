import question from "../../assets/icons/question-icon.svg";
import exit from "../../assets/icons/xmark-solid.svg";
import "./HelpModal.scss";

interface ModalProps {
  handleClick: (bool: boolean) => void;
}

export default function HelpModal({ handleClick }: ModalProps) {
  return (
    <div className="modal">
      <section className="modal__info">
        <div className="modal__header">
          <img
            src={question}
            alt="question mark"
            className="modal__icon"
            onClick={() => handleClick(false)}
          />
          <h1>Help</h1>
          <img
            src={exit}
            alt="question mark"
            className="modal__icon"
            onClick={() => handleClick(false)}
          />
        </div>
        <section className="modal__instructions">
          <h2 className="modal__subheading">How to Play</h2>
          <ul>
            <li>
              You have 5 tries to correctly identify the pictured car’s make,
              model, and year
              <ul>
                <li>You may enlarge the picture by tapping on it</li>
              </ul>
            </li>
            <li>Each category (make, model, and year) is worth 1 point</li>
            <li>
              After each guess, the picture will expand, revealing more of the
              car
            </li>
            <li>
              The multiplier is added to your final score and goes down by 1
              after each incorrect guess
              <ul>
                <li>
                  For example, if you guess the make, model, and year correctly
                  on your first attempt you will score 15 points total (1 for
                  each make, model, and year multiplied by 5). If you guess the
                  make, model, and year correctly on your second attempt you
                  will score 12 points, and so on
                </li>
              </ul>
            </li>
            <li>New quizzes are released daily at midnight</li>
          </ul>
          <h2 className="modal__subheading">User Stats</h2>
          <ul>
            <li>
              Be sure to play Cardle on the same device & browser each day to
              add to your score from previous games. Soon we’ll add a global
              leaderboard for all users to see how they stack up!
            </li>
          </ul>
          <h2 className="modal__subheading">Contact Us</h2>
          <ul>
            <li>
              If you have any feedback, questions or concerns, or if you’d like
              to advertise with us, please contact us at cardle.game@gmail.com
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
