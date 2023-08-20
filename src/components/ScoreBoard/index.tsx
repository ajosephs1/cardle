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
  const [makeClassName, setMakeClassName] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [modelClassName, setModelClassName] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [yearClassName, setYearClassName] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  
  const [lightClass, setLightClass] = useState({
    makeLight: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
    modelLight: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
    yearLight: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
  });
  // add state and hold classnames in each object pass current round through to useEffect
  
  // pass update class as props to formSubmit
  // arguments would be states for each so four arguments
  // lift state to app

  // function updateClass() {
  //   if (score[currentRound].make) {
  //     setTimeout(() => {
  //       setMakeClassName({
  //         ...lightClass, makeLight: {...lightClass.make, [currentRound]: "scoreboard__light--green"}
  //       });
  //     }, 1000);
  //   } else if (score[currentRound].make === false) {
  //     setTimeout(() => {
  //       setMakeClassName({
  //         ...makeClassName,
  //         [currentRound]: "scoreboard__light--red",
  //       });
  //     }, 1000);
  //   } else {
  //     setMakeClassName({
  //       ...makeClassName,
  //       [currentRound]: "",
  //     });
  //   }

  //   if (score[currentRound].model) {
  //     setTimeout(() => {
  //       setModelClassName({
  //         ...modelClassName,
  //         [currentRound]: "scoreboard__light--green",
  //       });
  //     }, 2000);
  //   } else if (score[currentRound].model === false) {
  //     setTimeout(() => {
  //       setModelClassName({
  //         ...modelClassName,
  //         [currentRound]: "scoreboard__light--red",
  //       });
  //     }, 2000);
  //   } else {
  //     setModelClassName({
  //       ...modelClassName,
  //       [currentRound]: "",
  //     });
  //   }

  //   if (score[currentRound].year) {
  //     setTimeout(() => {
  //       setYearClassName({
  //         ...yearClassName,
  //         [currentRound]: "scoreboard__light--green",
  //       });
  //     }, 3000);
  //   } else if (score[currentRound].year === false) {
  //     setTimeout(() => {
  //       setYearClassName({
  //         ...yearClassName,
  //         [currentRound]: "scoreboard__light--red",
  //       });
  //     }, 3000);
  //   } else {
  //     setYearClassName({
  //       ...yearClassName,
  //       [currentRound]: "",
  //     });
  //   }
  // }

  useEffect(() => {
    updateClass();
    // if (score[currentRound].make) {
    //   setTimeout(() => {
    //     setMakeClassName((prevMakeClassName) => ({
    //       ...prevMakeClassName,
    //       [currentRound]: "scoreboard__light--green",
    //     }));
    //   }, 1000);
    // } else if (score[currentRound].make === false) {
    //   setTimeout(() => {
    //     setMakeClassName((prevMakeClassName) => ({
    //       ...prevMakeClassName,
    //       [currentRound]: "scoreboard__light--red",
    //     }));
    //   }, 1000);
    // } else {
    //   setMakeClassName((prevMakeClassName) => ({
    //     ...prevMakeClassName,
    //     [currentRound]: "",
    //   }));
    // }
    // if (score[currentRound].model) {
    //   setTimeout(() => {
    //     setModelClassName((prevModelClassName) => ({
    //       ...prevModelClassName,
    //       [currentRound]: "scoreboard__light--green",
    //     }));
    //   }, 2000);
    // } else if (score[currentRound].model === false) {
    //   setTimeout(() => {
    //     setModelClassName((prevModelClassName) => ({
    //       ...prevModelClassName,
    //       [currentRound]: "scoreboard__light--red",
    //     }));
    //   }, 2000);
    // } else {
    //   setModelClassName((prevModelClassName) => ({
    //     ...prevModelClassName,
    //     [currentRound]: "",
    //   }));
    // }
    // if (score[currentRound].year) {
    //   setTimeout(() => {
    //     setYearClassName((prevYearClassName) => ({
    //       ...prevYearClassName,
    //       [currentRound]: "scoreboard__light--green",
    //     }));
    //   }, 3000);
    // } else if (score[currentRound].year === false) {
    //   setTimeout(() => {
    //     setYearClassName((prevYearClassName) => ({
    //       ...prevYearClassName,
    //       [currentRound]: "scoreboard__light--red",
    //     }));
    //   }, 3000);
    // } else {
    //   setYearClassName((prevYearClassName) => ({
    //     ...prevYearClassName,
    //     [currentRound]: "",
    //   }));
    // }
    // ... repeat for the year class ...
  }, [currentRound, score]);

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
              className={`scoreboard__light scoreboard__light--make ${makeClassName[1]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${modelClassName[1]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${yearClassName[1]}`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${makeClassName[2]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${modelClassName[2]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${yearClassName[2]}`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${makeClassName[3]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${modelClassName[3]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${yearClassName[3]}`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${makeClassName[4]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${modelClassName[4]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${yearClassName[4]}`}
            />
          </div>
        </div>
        <div className="scoreboard__row">
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--make ${makeClassName[5]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--model ${modelClassName[5]}`}
            />
          </div>
          <div className="scoreboard__light__container">
            <div
              className={`scoreboard__light scoreboard__light--year ${yearClassName[5]}`}
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
