import { useState, useEffect } from "react";
import "./ScoreBoard.scss";

type ScoreBoardProps = {
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
  multiplier,
  currentPoints,
  score,
}: ScoreBoardProps) {
  const [multiplierVals, setMultiplierVals] = useState({
    animation: false,
    valueOut: 5,
    valueIn: 4,
  });

  useEffect(() => {
    /* 
    
    */ if (multiplier === 5 || multiplier === 0) {
      return;
    } else {
      setMultiplierVals((prevMultiplierVals) => {
        return {
          ...prevMultiplierVals,
          animation: true,
        };
      });

      setTimeout(() => {
        setMultiplierVals((prevMultiplierVals) => {
          return {
            ...prevMultiplierVals,
            animation: false,
            valueOut: multiplier,
            valueIn: multiplier - 1,
          };
        });
      }, 450);
    }
  }, [multiplier]);

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
            Current Score:
          </p>
          <p className="scoreboard__text scoreboard__text--current">
            {currentPoints === 0 ? `-` : currentPoints}
          </p>
        </div>
        <div className="scoreboard__tally-row">
          <p className="scoreboard__text">Final Score Multiplier:</p>
          <div className="scoreboard__multiplier-container">
            <p className="scoreboard__text">x</p>
            {/* create a dive with two possible values
              one showing the next round and the current round 
              when the current round is over number scrolls down and next round comes in 
              then next round is added to queue
            */}
            <div className="scoreboard__multiplier-scroll">
              <p
                className={`scoreboard__multiplier-scroll--value scoreboard__multiplier-scroll--value-next ${
                  multiplierVals.animation
                    ? "scoreboard__multiplier-scroll--value-in"
                    : "scoreboard__multiplier-scroll--value-next"
                }`}
              >
                {multiplierVals.valueIn}
              </p>
              <p
                className={`scoreboard__multiplier-scroll--value ${
                  multiplierVals.animation
                    ? "scoreboard__multiplier-scroll--value-out"
                    : ""
                }`}
              >
                {multiplierVals.valueOut}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
