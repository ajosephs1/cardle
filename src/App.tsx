import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HelpModal from "./components/HelpModal";
import ResultModal from "./components/ResultModal";
import CarImage from "./components/CarImage";
import ScoreBoard from "./components/ScoreBoard";
import FormSubmit from "./components/FormSubmit";
import "./App.scss";

function App() {

  // function for strapiUtils
  const [apiModels, setApiModels] = useState(null);
  const [apiMakes, setApiMakes] = useState(null);
  // state to display instructions modal
  const [help, setHelp] = useState(false);

  const [didWin, setDidWin] = useState("");
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

  const [answer, setAnswer] = useState({
    make: "",
    model: "",
    year: "",
  });

  // useEffect(() => {
  //   axios.get("http://localhost:1337/api/answers/1").then((response) => {
  //     console.log(response.data.data);
  //     const make = response.data.data.attributes.make
  //     const model = response.data.data.attributes.model
  //     const year = response.data.data.attributes.year

  //   setAnswer({make, model, year} )
  //   });

  // }, []);
  console.log(formVals)

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
      currentRound:
        round.currentPoints === 3
          ? round.currentRound
          : round.currentRound === 5
          ? 5
          : nR,
      multiplier:
        round.currentPoints === 3
          ? round.multiplier
          : round.multiplier === 1
          ? 1
          : nM,
      make: roundBools.make,
      model: roundBools.model,
      year: roundBools.year,
    });
    setFormVals(newFormVals);

    if (addPoints === 3) {
      setTimeout(() => setDidWin("win"), 2750);
      // return;
    }

    if (currentRound === 5 && addPoints !== 3) {
      setTimeout(() => setDidWin("lose"), 2750);
      // return;
    }
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

  const totalPoints = round.currentPoints * (round.multiplier + 1);

  return (
    <div className="App">
      <header className="header">
        <Header handleClick={helpClick} />
      </header>
      <main className="container">
        <CarImage round={round.currentRound} />
        <ScoreBoard
          currentRound={round.currentRound}
          multiplier={round.multiplier}
          currentPoints={round.currentPoints}
          score={score}
        />
        <FormSubmit
          formValues={formVals}
          updateForm={updateForm}
          updateRound={updateRound}
        />
        {/* <div className="advertisement">
          <p>Ads placement</p>
        </div> */}
        {help && <HelpModal handleClick={helpClick} />}
        {didWin && (
          <ResultModal
            score={score}
            result={didWin}
            round={round.currentRound}
            total={totalPoints}
            closeModal={() => setDidWin("")}
          />
        )}
      </main>
    </div>
  );
}

export default App;
