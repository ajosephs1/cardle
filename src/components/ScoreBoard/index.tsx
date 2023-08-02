import "./ScoreBoard.scss";

export default function ScoreBoard() {
  return (
    <section className="scoreboard">
      <div className="scoreboard__headings">
        <h2 className="scoreboard__heading">Make</h2>
        <h2 className="scoreboard__heading">Model</h2>
        <h2 className="scoreboard__heading">Year</h2>
      </div>
      <section className="scoreboard__light-container">
        <div className="scoreboard__row">
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
          <div className="scoreboard__light"></div>
        </div>
      </section>
      <section className="scoreboard__tally"></section>
    </section>
  );
}
