import { useEffect, useState } from "react";
import "./ScoreBoard.scss";

type ScoreBoardProps = {
  currentRound: number;
  multiplier: number;
  currentPoints: number;
  score: {
    [key: number]: {
      make: null | boolean;
      model: null | boolean;
      year: null | boolean;
    };
  };
};

// add animation delay for each light 1s
//
export default function ScoreBoard({
  currentRound,
  multiplier,
  currentPoints,
  score,
}: ScoreBoardProps) {
  console.log(currentRound);
  return (
    <section className="scoreboard">
      <div className="scoreboard__headings">
        <h2 className="scoreboard__heading">Make</h2>
        <h2 className="scoreboard__heading">Model</h2>
        <h2 className="scoreboard__heading">Year</h2>
      </div>
      {/* each light will be given class name depending on value for respective round add delay appropriately for each light 1s 2s 3s */}
      <section className="scoreboard__light-container ">
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${
                score[1].make
                  ? "scoreboard__light--make--green"
                  : score[1].make === null
                  ? ""
                  : "scoreboard__light--make--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${
                score[1].model
                  ? "scoreboard__light--model--green"
                  : score[1].model === null
                  ? ""
                  : "scoreboard__light--model--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${
                score[1].year
                  ? "scoreboard__light--year--green"
                  : score[1].year === null
                  ? ""
                  : "scoreboard__light--year--red"
              }`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${
                score[2].make
                  ? "scoreboard__light--make--green"
                  : score[2].make === null
                  ? ""
                  : "scoreboard__light--make--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${
                score[2].model
                  ? "scoreboard__light--model--green"
                  : score[2].model === null
                  ? ""
                  : "scoreboard__light--model--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${
                score[2].year
                  ? "scoreboard__light--year--green"
                  : score[2].year === null
                  ? ""
                  : "scoreboard__light--year--red"
              }`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${
                score[3].make
                  ? "scoreboard__light--make--green"
                  : score[3].make === null
                  ? ""
                  : "scoreboard__light--make--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${
                score[3].model
                  ? "scoreboard__light--model--green"
                  : score[3].model === null
                  ? ""
                  : "scoreboard__light--model--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${
                score[3].year
                  ? "scoreboard__light--year--green"
                  : score[3].year === null
                  ? ""
                  : "scoreboard__light--year--red"
              }`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${
                score[4].make
                  ? "scoreboard__light--make--green"
                  : score[4].make === null
                  ? ""
                  : "scoreboard__light--make--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${
                score[4].model
                  ? "scoreboard__light--model--green"
                  : score[4].model === null
                  ? ""
                  : "scoreboard__light--model--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${
                score[4].year
                  ? "scoreboard__light--year--green"
                  : score[4].year === null
                  ? ""
                  : "scoreboard__light--year--red"
              }`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${
                score[5].make
                  ? "scoreboard__light--make--green"
                  : score[5].make === null
                  ? ""
                  : "scoreboard__light--make--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${
                score[5].model
                  ? "scoreboard__light--model--green"
                  : score[5].model === null
                  ? ""
                  : "scoreboard__light--model--red"
              }`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${
                score[5].year
                  ? "scoreboard__light--year--green"
                  : score[5].year === null
                  ? ""
                  : "scoreboard__light--year--red"
              }`}
            />
          </div>
        </div>
        
      </section>
      <section className="scoreboard__tally">
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text scoreboard__text--current">
            Current Points:
          </p>
          <p className="scoreboard__text scoreboard__text--current">
            {currentPoints === 0 ? `-` : currentPoints}
          </p>
        </div>
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text">Round Multiplier</p>
          <p className="scoreboard__text scoreboard__text--multiplier">{`x${multiplier}`}</p>
        </div>
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text scoreboard__text--total">
            Total Points:
          </p>
          <p className="scoreboard__text scoreboard__text--total">
            {currentPoints * multiplier === 0
              ? `-`
              : currentPoints * multiplier}
          </p>
        </div>
      </section>
    </section>
  );
}
