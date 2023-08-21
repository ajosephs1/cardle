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
      make: null,
      model: null,
      year: null,
    },
    2: {
      make: null,
      model: null,
      year: null,
    },
    3: {
      make: null,
      model: null,
      year: null,
    },
    4: {
      make: null,
      model: null,
      year: null,
    },
    5: {
      make: null,
      model: null,
      year: null,
    },
  });

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

  function updateScore(nR: number, nM: number) {
    let currentRound = round.currentRound;
    let addPoints = round.currentPoints;
    let roundBools = {
      make: false,
      model: false,
      year: false,
    };
    let newFormVals = {
      make: formVals.make,
      model: formVals.model,
      year: formVals.year,
    };

    if (formVals.make === answer.make) {
      roundBools.make = true;

      if (!round.make) {
        addPoints += 1;
      }
    } else {
      newFormVals.make = "";
    }

    if (formVals.model === answer.model) {
      roundBools.model = true;

      if (!round.model) {
        addPoints += 1;
      }
    } else {
      newFormVals.model = "";
    }

    if (formVals.year === answer.year) {
      roundBools.year = true;

      if (!round.year) {
        addPoints += 1;
      }
    } else {
      newFormVals.year = "";
    }

    setScore({ ...score, [currentRound]: roundBools });
    setRound({
      ...round,
      currentPoints: addPoints,
      currentRound: round.currentRound === 5 ? 1 : nR,
      multiplier: round.multiplier === 1 ? 5 : nM,
      make: roundBools.make,
      model: roundBools.model,
      year: roundBools.year,
    });
    setFormVals(newFormVals);
  }

  function updateRound() {
    const nextRound = round.currentRound + 1;
    const nextMultiplier = round.multiplier - 1;

    updateScore(nextRound, nextMultiplier);
  }

  function updateForm(valtype: string, val: string) {
    setFormVals({ ...formVals, [valtype]: val });
  }

  const helpClick = (bool: boolean) => {
    setHelp(bool);
  };

  return (
    <div className="App">
      <main className="container">
        <Header handleClick={helpClick} />
        <CarImage round={round.currentRound} />
        <ScoreBoard
          currentRound={round.currentRound}
          multiplier={round.multiplier}
          currentPoints={round.currentPoints}
          score = {score}
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
