import React from 'react';
import {useEffect, useState} from 'react'
import Header from './components/Header';
import CarImage from './components/CarImage';
import ScoreBoard from './components/ScoreBoard';
import FormSubmit from './components/FormSubmit';
import './App.scss';

function App() {

  const [help, setHelp] = useState(false)

  const helpClick = () => {
    setHelp(true)
  }


  return (
    <div className="App">
      <Header onClick = {helpClick}/>
      <CarImage/>
      <ScoreBoard/>
      <FormSubmit/>
      <div className='advertisement'><p>Ads placement</p></div>
    </div>
  );
}

export default App;
