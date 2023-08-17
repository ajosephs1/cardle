import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HelpModal from "./components/HelpModal";
import CarImage from "./components/CarImage";
import ScoreBoard from "./components/ScoreBoard";
import FormSubmit from "./components/FormSubmit";
import "./App.scss";

function App() {
  const [help, setHelp] = useState(false);

  // state for round
  const [round, setRound] = useState({
    currentRound: 1,
    1: {
      played: false,
      score: 0,
      make: null,
      model: null,
      year: null,
    },
    2: {
      played: false,
      score: 0,
      make: null,
      model: null,
      year: null,
    },
    3: {
      played: false,
      score: 0,
      make: null,
      model: null,
      year: null,
    },
    4: {
      played: false,
      score: 0,
      make: null,
      model: null,
      year: null,
    },
    5: {
      played: false,
      score: 0,
      make: null,
      model: null,
      year: null,
    }
  });

  function updateRound(){
    const nextRound = round.currentRound + 1
    // remove ternary function 
    setRound({...round, currentRound: round.currentRound === 5? 0: nextRound})
  }

  console.log(round.currentRound)
  
  const [formVals, setFormVals] = useState({
    make: "",
    model: "",
    year: "",
  });

  const answer = {
    make: "BMW",
    model: "M3",
    year: "1985 - 1989",
  };
  // mock answer
  // include an object and 5 images

  // game logic
  /*
 1. useEffect to hold state of game logic for the day 
 2. scoreboard will work in a loop: 
 max five loops
 - loop one we'll compare the inputs to answer 
 -if some correct change state of first row, reduce multiplier and increase current a total points and change picture 
  if some false await next user input submit triggers next loop 
 3.
 4.
 5.
 6.
 */
  function updateForm(valtype: string, val: string) {
    setFormVals({ ...formVals, [valtype]: val });
  }

  const helpClick = (bool: boolean) => {
    setHelp(bool);
  };

  console.log(formVals);
  // hold values of form input in app state
  // therfore pass props to formsubmit then
  return (
    <div className="App">
      <main className="container">
        <Header handleClick={helpClick} />
        <CarImage round={round.currentRound}/>
        <ScoreBoard />
        <FormSubmit formValues={formVals} updateForm={updateForm} updateRound ={updateRound} />
        <div className="advertisement">
          <p>Ads placement</p>
        </div>
        {help ? <HelpModal handleClick={helpClick} /> : null}
      </main>
    </div>
  );
}

export default App;
