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

  const [formVals, setFormVals] = useState({
    make: "",
    model: "",
    year: "",
  });

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

  console.log(formVals)
// hold values of form input in app state 
// therfore pass props to formsubmit then 
  return (
    <div className="App">
      <main className="container">
        <Header handleClick={helpClick} />
        <CarImage />
        <ScoreBoard />
        <FormSubmit formValues ={formVals} updateForm = {updateForm}/>
        <div className="advertisement">
          <p>Ads placement</p>
        </div>
        {help? <HelpModal handleClick={helpClick}/>: null}
      </main>
    </div>
  );
}

export default App;
