import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HelpModal from "./components/HelpModal";
import CarImage from "./components/CarImage";
import ScoreBoard from "./components/ScoreBoard";
import FormSubmit from "./components/FormSubmit";
import "./App.scss";

function App() {
  // state to display instructions modal
  const [help, setHelp] = useState(false);
  // state for round
  const [round, setRound] = useState({
    currentRound: 1,
    multiplier: 5,
    currentPoints: 0,
    make: false,
    model: false,
    year: false,
  });

  const [score, setScore] = useState({
    1: {
      // played: false,
      // score: 0,
      make: null,
      model: null,
      year: null,
    },
    2: {
      // played: false,
      // score: 0,
      make: null,
      model: null,
      year: null,
    },
    3: {
      // played: false,
      // score: 0,
      make: null,
      model: null,
      year: null,
    },
    4: {
      // played: false,
      // score: 0,
      make: null,
      model: null,
      year: null,
    },
    5: {
      // played: false,
      // score: 0,
      make: null,
      model: null,
      year: null,
    },
  });
  // state to hold current use input values
  // after submit set input values and erase only values that are incorrect
  const [formVals, setFormVals] = useState({
    make: "",
    model: "",
    year: "",
  });

  // mock answer that will be pulled from cms daily
  const answer = {
    make: "BMW",
    model: "M3",
    year: "1985-1989",
  };

  // use inscope variable to call upadateScore only once and previous value only once 
  function updateScore() {
    // if (make = answer.make) setState (set round.round[round.currentround].make = true) setState(Add to currentPoints score )
    if (formVals.make === answer.make) {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], make: true },
      });

      const newPoints = round.currentPoints + 1;
      !round.make && setRound({ ...round, currentPoints: newPoints });
    } else {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], make: false },
      });
      setFormVals({
        ...formVals,
        make: "",
      });
    }

    if (formVals.model === answer.model) {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], model: true },
      });

      const newPoints = round.currentPoints + 1;
      !round.model && setRound({ ...round, currentPoints: newPoints });
    } else {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], model: false },
      });
      setFormVals({
        ...formVals,
        model: "",
      });
    }

    if (formVals.year === answer.year) {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], year: true },
      });

      const newPoints = round.currentPoints + 1;
      !round.year && setRound({ ...round, currentPoints: newPoints });
    } else {
      setScore({
        ...score,
        [round.currentRound]: { ...[round.currentRound], year: false },
      });
      setFormVals({
        ...formVals,
        make: "",
      });
    }
  }
  /* first check
   */
  /* 
  perform this for all rounds this will trigger lights
  put value of false of form inputs back to "" all others remain the same
  */
  //  if at any attemp score === 3 display winning modal
  //  on the fifth attempt if current score != 3 display losing modal : display winning modal
  function updateRound() {
    const nextRound = round.currentRound + 1;
    const nextMultiplier = round.multiplier - 1;
    // remove ternary function
    // update state
    updateScore()
    setRound({
      ...round,
      currentRound: round.currentRound === 5 ? 1 : nextRound,
      multiplier: round.multiplier === 1 ? 5 : nextMultiplier,
    });
  }

  function updateForm(valtype: string, val: string) {
    setFormVals({ ...formVals, [valtype]: val });
  }

  const helpClick = (bool: boolean) => {
    setHelp(bool);
  };

  console.log((formVals.year))
  console.log((answer.year))

  return (
    <div className="App">
      <main className="container">
        <Header handleClick={helpClick} />
        <CarImage round={round.currentRound} />
        <ScoreBoard
          currentRound={round.currentRound}
          multiplier={round.multiplier}
          currentPoints={round.currentPoints}
        />
        <FormSubmit
          formValues={formVals}
          updateForm={updateForm}
          updateRound={updateRound}
        />
        <div className="advertisement">
          <p>Ads placement</p>
        </div>
        {help ? <HelpModal handleClick={helpClick} /> : null}
      </main>
    </div>
  );
}

export default App;
