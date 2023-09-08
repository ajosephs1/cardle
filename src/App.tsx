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
  // state to display instructions modal
  const [help, setHelp] = useState(false);
  const [didWin, setDidWin] = useState("");
  const [answerStreak, setAnswerStreak] = useState(Number);
  const [allTimeScore, setAllTimeScore] = useState(Number);
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
  const [carImages, setCarImages] = useState({
    imageFull: "",
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
    imageFive: "",
  });

  const localDate = new Date().toLocaleDateString("en-GB");
  const dateParts = localDate.split("/");
  const currentDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const totalPoints = round.currentPoints * (round.multiplier + 1);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/answers?[fields][0]=date&populate[make][fields][0]=make&populate[model][fields][0]=model&populate[year][fields][0]=year&populate[imageFull][fields][0]=formats&populate[imageOne][fields][0]=formats&populate[imageTwo][fields][0]=formats&populate[imageThree][fields][0]=formats&populate[imageFour][fields][0]=formats&populate[imageFive][fields][0]=formats&filters[date][$eq]=${currentDate}`
      )
      .then((response) => {

        const answerData = response.data.data[0].attributes;
        const make = answerData.make.data.attributes.make;
        const model = answerData.model.data.attributes.model;
        const year = answerData.year.data.attributes.year;

        const placeHolderImg =
        "https://placehold.jp/000000/ffffff/300x200.png?text=%F0%9F%8F%8E";
        const imageFull = response
        ? answerData.imageFull.data.attributes.formats.medium.url
        : placeHolderImg;
        const imageOne = response
          ? answerData.imageOne.data.attributes.formats.thumbnail.url
          : placeHolderImg;
        const imageTwo = response
          ? answerData.imageTwo.data.attributes.formats.thumbnail.url
          : placeHolderImg;
        const imageThree = response
          ? answerData.imageThree.data.attributes.formats.thumbnail.url
          : placeHolderImg;
        const imageFour = response
          ? answerData.imageFour.data.attributes.formats.thumbnail.url
          : placeHolderImg;
        const imageFive = response
          ? answerData.imageFive.data.attributes.formats.thumbnail.url
          : placeHolderImg;

        setAnswer({ make, model, year });
        setCarImages({
          imageFull,
          imageOne,
          imageTwo,
          imageThree,
          imageFour,
          imageFive,
        });
      });
  }, []);

  useEffect(() => {
    // localStorage.setItem('answerStreak', '0')
    const answerStreakString = localStorage.getItem("answerStreak");
    const answerStreak = answerStreakString ? parseInt(answerStreakString) : 0;

    setAnswerStreak(answerStreak);

    const allTimeScoreString = localStorage.getItem("allTimeScore");
    const allTimeLocalScore = allTimeScoreString
      ? parseInt(allTimeScoreString)
      : 0;

    setAllTimeScore(allTimeLocalScore);
  }, []);

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

    if (answer.make && formVals.make === answer.make) {
      roundBools.make = true;

      if (!round.make) {
        addPoints += 1;
      }
    } else {
      newFormVals.make = "";
    }

    if (answer.model && formVals.model === answer.model) {
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
      localStorage.setItem("answerStreak", `${answerStreak + 1}`);
      setAnswerStreak(answerStreak + 1);

      localStorage.setItem(
        "allTimeScore",
        `${allTimeScore + (6 - currentRound) * addPoints}`
      );
      setAllTimeScore(allTimeScore + (6 - currentRound) * addPoints);

      setTimeout(() => setDidWin("win"), 2750);
    }

    if (currentRound === 5 && addPoints !== 3) {
      localStorage.setItem("answerStreak", `0`);

      localStorage.setItem(
        "allTimeScore",
        `${allTimeScore + (6 - currentRound) * addPoints}`
      );
      setAllTimeScore(allTimeScore + (6 - currentRound) * addPoints);

      setTimeout(() => setDidWin("lose"), 2750);
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

  return (
    <div className="App">
      <header className="header">
        <Header handleClick={helpClick} />
      </header>
      <main className="container">
        <CarImage round={round.currentRound} images={carImages} />
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
            allTimeScore={allTimeScore}
            closeModal={() => setDidWin("")}
            answer={answer}
            imageFull={carImages.imageFull}
          />
        )}
      </main>
    </div>
  );
}

export default App;
