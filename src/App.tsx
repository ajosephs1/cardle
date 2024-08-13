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
  const [gamePlayed, setGamePlayed] = useState(false);
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
    // year: "",
    answerYear: "",
    // remove year
    photoCredit: ""
  });
  const [carImages, setCarImages] = useState({
    imageFull: "",
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
    imageFive: "",
  });
  const [coordinates, setCoordinates] = useState({
    x: 0, y: 0
  })


  // global variables
  const localDate = new Date().toLocaleDateString("en-GB");
  const dateParts = localDate.split("/");
  const currentDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const totalPoints =
    round.currentPoints *
    (round.multiplier === 5
      ? 5
      : round.multiplier === 0
        ? 1
        : round.multiplier + 1);

  // change api request to only accept the year input 
  // API requests to strapi
  useEffect(() => {
    axios
      .get(
        // `${BASE_URL}/answers?populate[fields][0]=date&populate[make][fields][0]=make&populate[model][fields][0]=model&populate[year][fields][0]=year&populate[photoCredit][fields][0]=photoCredit&populate[imageFull][fields][0]=formats&populate[imageOne][fields][0]=formats&populate[imageTwo][fields][0]=formats&populate[imageThree][fields][0]=formats&populate[imageFour][fields][0]=formats&populate[imageFive][fields][0]=formats&filters[date][$eq]=${currentDate}`

        // url for development environment ensure to change date yyyy-mm-dd
        "http://localhost:1337/api/answers?populate[fields][0]=date&populate[make][fields][0]=make&populate[model][fields][0]=model&populate[year][fields][0]=year&populate[photoCredit][fields][0]=photoCredit&populate[imageFull][fields][0]=formats&populate[imageOne][fields][0]=formats&populate[imageTwo][fields][0]=formats&populate[imageThree][fields][0]=formats&populate[imageFour][fields][0]=formats&populate[imageFive][fields][0]=formats&filters[date][$eq]=2024-02-02"
      )
      .then((response) => {
        if (response.data.data.length) {
          const answerData = response.data.data[0].attributes;
          const make = answerData.make.data.attributes.make;
          const model = answerData.model.data.attributes.model;
          // const year = answerData.year.data.attributes.year;
          const answerYear = answerData.answerYear;
          const xCoordinate: number = answerData.xCoordinate
          const yCoordinate: number = answerData.yCoordinate
          const photoCredit = answerData.photoCredit ? answerData.photoCredit : ""

          // programaitcally create differnt versions of the car image cropped and zoomed to specific level
          // change imageFull to include other attributes 

          /*  const imageFull =
             answerData.imageFull.data.attributes.formats.hasOwnProperty("small")
               ? answerData.imageFull.data.attributes.formats.small.url
               : answerData.imageFull.data.attributes.formats.medium.url; */
          const imageFull =
            answerData.imageFull.data.attributes.formats.hasOwnProperty("small")
              ? answerData.imageFull.data.attributes.formats.small
              : answerData.imageFull.data.attributes.formats.medium;
          const imageOne =
            answerData.imageOne.data.attributes.formats.hasOwnProperty("small")
              ? answerData.imageOne.data.attributes.formats.small.url
              : answerData.imageOne.data.attributes.formats.thumbnail.url;
          const imageTwo =
            answerData.imageTwo.data.attributes.formats.hasOwnProperty("small")
              ? answerData.imageTwo.data.attributes.formats.small.url
              : answerData.imageTwo.data.attributes.formats.thumbnail.url;
          const imageThree =
            answerData.imageThree.data.attributes.formats.hasOwnProperty(
              "small"
            )
              ? answerData.imageThree.data.attributes.formats.small.url
              : answerData.imageThree.data.attributes.formats.thumbnail.url;
          const imageFour =
            answerData.imageFour.data.attributes.formats.hasOwnProperty("small")
              ? answerData.imageFour.data.attributes.formats.small.url
              : answerData.imageFour.data.attributes.formats.thumbnail.url;
          const imageFive =
            answerData.imageFive.data.attributes.formats.hasOwnProperty("small")
              ? answerData.imageFive.data.attributes.formats.small.url
              : answerData.imageFive.data.attributes.formats.thumbnail.url;

          setAnswer({ make, model, answerYear, photoCredit });
          setCarImages({
            imageFull,
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
          });
          setCoordinates({ x: xCoordinate, y: yCoordinate })

        } else {
          const make = "";
          const model = "";
          // const year = "";
          const answerYear = "";
          const photoCredit = ""

          const placeholderURL =
            "https://placehold.jp/0f0a10/ffffff/300x200.png?text=%F0%9F%8F%8E";
          const imageFull = placeholderURL;
          const imageOne = placeholderURL;
          const imageTwo = placeholderURL;
          const imageThree = placeholderURL;
          const imageFour = placeholderURL;
          const imageFive = placeholderURL;

          setAnswer({ make, model, answerYear, photoCredit });
          setCarImages({
            imageFull,
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
          });
          setCoordinates({x: Math.random()* (900-1) +1, y: Math.random()* (600-1) +1})
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // handle all data in localStorage
  useEffect(() => {
    // clear gamestate from previous day or retain game state after reload
    let localStorageGamePlayed = localStorage.getItem("gamePlayed");
    const localStorageDate = localStorage.getItem("lastPlayed");

    if (localStorageDate === null) {
      setHelp(true);
    } else {
      // Function to convert a date string (yyyy-mm-dd) to a Date object
      function parseDate(dateString: string) {
        const [year, month, day] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day); // month is zero-based in JS Date
      }
      const lastPlayedDate = parseDate(localStorageDate);
      const currentUnixDate = new Date();
      const differenceInMilliseconds = currentUnixDate.getTime() - lastPlayedDate.getTime();
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      if (differenceInDays > 1) {
        localStorage.setItem("answerStreak", "0")
      }
    }

    // reset game if new day
    if (localStorageDate !== currentDate) {
      localStorage.setItem("lastPlayed", currentDate);
      localStorage.setItem("gamePlayed", "false");
      localStorageGamePlayed = "false";
      localStorage.removeItem("gameScore");
      localStorage.removeItem("gameRound");
      localStorage.removeItem("gameFormVals");
    } else {
      const localStorageScore: string | null =
        localStorage.getItem("gameScore");
      if (localStorageScore) {
        setScore(JSON.parse(localStorageScore));
      }
      const localStorageRound: string | null =
        localStorage.getItem("gameRound");
      if (localStorageRound) {
        setRound(JSON.parse(localStorageRound));
      }
      const localStorageFormVals: string | null =
        localStorage.getItem("gameFormVals");
      if (localStorageFormVals) {
        setFormVals(JSON.parse(localStorageFormVals));
      }
    }

    if (localStorageGamePlayed === "true") {
      setGamePlayed(true);
    }

    const answerStreakString = localStorage.getItem("answerStreak");
    const answerStreak = answerStreakString ? parseInt(answerStreakString) : 0;
    setAnswerStreak(answerStreak);

    const allTimeScoreString = localStorage.getItem("allTimeScore");
    const allTimeLocalScore = allTimeScoreString
      ? parseInt(allTimeScoreString)
      : 0;
    setAllTimeScore(allTimeLocalScore);
  }, [answer]);

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
    }

    if (answer.model && formVals.model === answer.model) {
      roundBools.model = true;

      if (!round.model) {
        addPoints += 1;
      }
    }

    if (parseInt(formVals.year) >= parseInt(answer.answerYear) - 3 && parseInt(formVals.year) <= parseInt(answer.answerYear) + 3) {
      roundBools.year = true;

      if (!round.year) {
        addPoints += 1;
      }
    }

    setScore({ ...score, [currentRound]: roundBools });
    localStorage.setItem(
      "gameScore",
      JSON.stringify({ ...score, [currentRound]: roundBools })
    );

    setTimeout(() => {
      localStorage.setItem(
        "gameRound",
        JSON.stringify({
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
              : round.multiplier === 0
                ? 1
                : nM,
          make: roundBools.make,
          model: roundBools.model,
          year: roundBools.year,
        })
      );
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
            : round.multiplier === 0
              ? 1
              : nM,
        make: roundBools.make,
        model: roundBools.model,
        year: roundBools.year,
      });
    }, 1750);

    setFormVals(newFormVals);
    localStorage.setItem("gameFormVals", JSON.stringify(newFormVals));

    // Update win/lose state
    if (addPoints === 3) {
      localStorage.setItem("answerStreak", `${answerStreak + 1}`);
      setAnswerStreak(answerStreak + 1);

      localStorage.setItem(
        "allTimeScore",
        `${allTimeScore + (6 - currentRound) * addPoints}`
      );
      setAllTimeScore(allTimeScore + (6 - currentRound) * addPoints);
      localStorage.setItem("gamePlayed", "true");
      setGamePlayed(true);

      setTimeout(() => setDidWin("win"), 2500);
    }

    if (currentRound === 5 && addPoints !== 3) {
      localStorage.setItem("answerStreak", "0");

      localStorage.setItem(
        "allTimeScore",
        `${allTimeScore + (6 - currentRound) * addPoints}`
      );
      localStorage.setItem("gamePlayed", "true");
      setAllTimeScore(allTimeScore + (6 - currentRound) * addPoints);
      setGamePlayed(true);

      setTimeout(() => setDidWin("lose"), 2500);
    }
  }

  function updateRound() {
    // show result modal if the game has already been played
    if (round.currentPoints === 3 && gamePlayed) {
      setDidWin("win");
      return;
    }
    if (round.currentPoints !== 3 && gamePlayed) {
      setDidWin("lose");
      return;
    }

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
      <section className="cardle-content">
        <header className="header">
          <Header handleClick={helpClick} />
        </header>
        <main className="main">
          <CarImage round={round.currentRound} images={carImages} coordinates = {coordinates}/>
          <ScoreBoard
            multiplier={round.multiplier}
            currentPoints={round.currentPoints}
            score={score}
          />
          <FormSubmit
            formValues={formVals}
            updateForm={updateForm}
            updateRound={updateRound}
            isPlayed={gamePlayed}
            // round={round.currentRound}
            round={round}
          />

          {help && <HelpModal handleClick={helpClick} />}
          {didWin && (
            <ResultModal
              score={score}
              result={didWin}
              round={round.currentRound}
              total={totalPoints}
              allTimeScore={allTimeScore}
              streak={answerStreak}
              closeModal={() => setDidWin("")}
              answer={answer}
              imageFull={carImages.imageFull}
            />
          )}
        </main>
      </section>
    </div>
  );
}

export default App;
