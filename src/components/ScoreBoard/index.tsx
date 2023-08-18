import "./ScoreBoard.scss";

type ScoreBoardProps = {
  currentRound: number;
  multiplier: number;
  currentPoints: number;
};

// add animation delay for each light 1s
// 
export default function ScoreBoard({
  currentRound,
  multiplier,
  currentPoints,
}: ScoreBoardProps) {

  return (
    <section className="scoreboard">
      <div className="scoreboard__headings">
        <h2 className="scoreboard__heading">Make</h2>
        <h2 className="scoreboard__heading">Model</h2>
        <h2 className="scoreboard__heading">Year</h2>
      </div>
      {/* each light will be given class name depending on value for respective round add delay appropriately for each light 1s 2s 3s */}
      <section className="scoreboard__light-container">
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
          <div className="scoreboard__light__container">
            <div className="scoreboard__light" />
          </div>
        </div>
      </section>
      <section className="scoreboard__tally">
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text scoreboard__text--current">
            Current Points:
          </p>
          <p className="scoreboard__text scoreboard__text--current">{currentPoints === 0 ? `-`: currentPoints}</p>
        </div>
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text">Round Multiplier</p>
          <p className="scoreboard__text scoreboard__text--multiplier">{`x${multiplier}`}</p>
        </div>
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text scoreboard__text--total">
            Total Points:
          </p>
          <p className="scoreboard__text scoreboard__text--total">{(currentPoints * multiplier) === 0 ? `-`: currentPoints * multiplier}</p>
        </div>
      </section>
    </section>
  );
}
