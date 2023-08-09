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

  const helpClick = (bool: boolean) => {
    setHelp(bool);
  };


  return (
    <div className="App">
      <main className="container">
        <Header handleClick={helpClick} />
        <CarImage />
        <ScoreBoard />
        <FormSubmit />
        <div className="advertisement">
          <p>Ads placement</p>
        </div>
        {help? <HelpModal handleClick={helpClick}/>: null}
      </main>
    </div>
  );
}

export default App;
