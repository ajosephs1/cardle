import { useState } from "react";
import exit from "../../assets/icons/xmark-solid.svg";
import share from "../../assets/icons/share-icon.svg";
import fire from "../../assets/icons/fire-icon.svg";
import fireTwo from "../../assets/icons/fire-icon2.svg";
import "./ResultModal.scss";

type ResultModalProps = {
  result: string;
  total: number;
  allTimeScore: number;
  streak: number;
  round: number;
  closeModal: () => void;
  score: {
    [key: number]: {
      make: null | boolean;
      model: null | boolean;
      year: null | boolean;
    };
  };
  imageFull: string;
  answer: {
    make: string;
    model: string;
    year: string;
    answerYear: string;
  };
};

export default function ResultModal({
  result,
  round,
  score,
  total,
  allTimeScore,
  streak,
  imageFull,
  answer,
  closeModal,
}: ResultModalProps) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  function isRoundFive() {
    if (
      score[5].make !== null &&
      score[5].model !== null &&
      score[5].year !== null
    ) {
      return true;
    }
  }

  function emojiGrid(obj: ResultModalProps["score"]) {
    let result = `Cardle ${isRoundFive() ? 5 : round - 1}/5\nStreak ${streak}🔥\n`;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const { make, model, year } = obj[key];
        if (make !== null && model !== null && year !== null) {
          const makeStatus = make ? "🟢" : "🔴";
          const modelStatus = model ? "🟢" : "🔴";
          const yearStatus = year ? "🟢" : "🔴";

          result += `${makeStatus}\u00A0${modelStatus}\u00A0${yearStatus}\n`;
        }
      }
    }

    result += "https://cardle.boxbox.autos";
    return result;
  }

  function trueRow(rnd: number) {
    if (
      score[rnd].make !== null &&
      score[rnd].model !== null &&
      score[rnd].year !== null
    ) {
      return true;
    }
  }

  function shareResult() {
    const shareData = { text: emojiGrid(score) };
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {
          console.log(`thanks for sharing \n${shareData.text} `);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareData.text)
        .then(() => {
          console.log(`copied to clipboard \n\n ${shareData.text} `);
          setShowCopiedMessage(true);
          setTimeout(() => {
            setShowCopiedMessage(false);
          }, 2000);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("score not shared\n", shareData.text);
    }
  }

  return (
    <div className="result">
      <div className="result__modal">
        <img
          src={exit}
          alt="exit button"
          className="result__exit"
          onClick={closeModal}
        />
        <h1 className="result__title">
          {result === "win" ? "WINNER!" : `BETTER LUCK NEXT TIME`}
        </h1>
        <p className="result__answer">{`${answer.make} ${answer.model} ${
          answer.answerYear ? answer.answerYear : ""
        }`}</p>
        <img src={imageFull} alt="full car " className="result__image" />
        <div className="result__headings">
          <h2 className="result__heading">Make</h2>
          <h2 className="result__heading">Model</h2>
          <h2 className="result__heading">Year</h2>
        </div>
        <section className="result__light-container ">
          <div className={trueRow(1) ? `result__row` : ""}>
            <div className="result__light__container">
              <div
                className={
                  score[1].make
                    ? "result__light result__light--green"
                    : score[1].make === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[1].model
                    ? "result__light result__light--green"
                    : score[1].model === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[1].year
                    ? "result__light result__light--green"
                    : score[1].year === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
          </div>
          <div className={trueRow(2) ? `result__row` : ""}>
            <div className="result__light__container">
              <div
                className={
                  score[2].make
                    ? "result__light result__light--green"
                    : score[2].make === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[2].model
                    ? "result__light result__light--green"
                    : score[2].model === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[2].year
                    ? "result__light result__light--green"
                    : score[2].year === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
          </div>
          <div className={trueRow(3) ? `result__row` : ""}>
            <div className="result__light__container">
              <div
                className={
                  score[3].make
                    ? "result__light result__light--green"
                    : score[3].make === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[3].model
                    ? "result__light result__light--green"
                    : score[3].model === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[3].year
                    ? "result__light result__light--green"
                    : score[3].year === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
          </div>
          <div className={trueRow(4) ? `result__row` : ""}>
            <div className="result__light__container">
              <div
                className={
                  score[4].make
                    ? "result__light result__light--green"
                    : score[4].make === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[4].model
                    ? "result__light result__light--green"
                    : score[4].model === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[4].year
                    ? "result__light result__light--green"
                    : score[4].year === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
          </div>
          <div className={trueRow(5) ? `result__row` : ""}>
            <div className="result__light__container">
              <div
                className={
                  score[5].make
                    ? "result__light result__light--green"
                    : score[5].make === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[5].model
                    ? "result__light result__light--green"
                    : score[5].model === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
            <div className="result__light__container">
              <div
                className={
                  score[5].year
                    ? "result__light result__light--green"
                    : score[5].year === null
                    ? ""
                    : "result__light result__light--red"
                }
              />
            </div>
          </div>
        </section>
        <div className="result__summary">
          <div className="result__summary__heading">
            <h2 className="result__summary__heading--text">Points Summary</h2>
            {streak > 0 && (
              <div className="result__summary__heading--streak">
                <p className="result__summary__heading--value">
                  Streak: &nbsp;
                </p>
                <img
                  src={fireTwo}
                  className="result__summary__heading--icon"
                  alt="fire icon"
                />
                <p className="result__summary__heading--value">
                  &nbsp; {streak}
                </p>
              </div>
            )}
          </div>
          <div className="result__value">
            <p className="result__value--text">This round: </p>
            <p className="result__value--value">{total}</p>
          </div>
          <div className="result__value">
            <p className="result__value--text">All-time:</p>
            <p className="result__value--value">{allTimeScore}</p>
          </div>
        </div>
        <p
          className={`result__copied ${
            showCopiedMessage ? "result__copied--visible" : ""
          }`}
        >
          coppied to clipboard 📋
        </p>
        <div className="result__share" onClick={() => shareResult()}>
          <p className="result__share-text">share</p>
          <img src={share} alt="share button" className="result__share-icon" />
        </div>
      </div>
    </div>
  );
}
