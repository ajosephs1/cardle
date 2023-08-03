import React from 'react';
import './App.scss';
import Header from './components/Header';
import CarImage from './components/CarImage';
import ScoreBoard from './components/ScoreBoard';
import FormSubmit from './components/FormSubmit';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarImage/>
      <ScoreBoard/>
      <FormSubmit/>
    </div>
  );
}

export default App;
