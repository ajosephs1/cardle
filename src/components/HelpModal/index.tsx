import "./HelpModal.scss";

export default function HelpModal() {
  return (
    <div className="modal">
      <section className="modal__info">
        <div className="modal__header">
          <p>?</p>
          <h1>Help</h1>
          <p>X</p>
        </div>
        <section className="modal__instructions">
          <h2 className = "modal__subheading">How to Play</h2>
          <ul>
            <li>
              You have 5 tries to correctly identify the pictured car’s make,
              model, and year
            </li>
            <li>Each category (make, model, and year) is worth 1 point</li>
            <li>
              After each guess, the picture will expand, revealing more of the
              car
            </li>
            <li>
              Every time you guess incorrectly, the multiplier will drop by 1
              <ul>
                <li>
                  Points scored on the first guess will be multiplied by 5,
                  points scored on the second guess will be multiplied by 4 and
                  so on
                </li>
              </ul>
            </li>
            <li>New cars are released daily at midnight</li>
          </ul>
          <h2 className = "modal__subheading">User Stats</h2>
          <ul>
            <li>
              To keep track of your score and climb the leaderboard, create a
              free account by entering your email and choosing a username
              <li>
                Click on the bar graph in the top right corner to view your
                stats and the leaderboard each day
              </li>
            </li>
          </ul>
          <h2 className = "modal__subheading">Contact Us</h2>
          <ul>
            <li>
              If you have any questions or concerns, contact us at
              cardle@boxbox.auto
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
