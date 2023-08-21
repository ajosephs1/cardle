import exit from "../../assets/icons/xmark-solid.svg";
import share from "../../assets/icons/share-icon.svg"
import fullImage from "../../data/images/bmwe30.png";
import "./ResultModal.scss";

type ResultModalProps = {
  result: string;
  total: number
  score: {
    [key: number]: {
      make: null | boolean;
      model: null | boolean;
      year: null | boolean;
    };
  };
};

export default function ResultModal({ result, score,total }: ResultModalProps) {
  // function to display grid
  /* 
filter through objects that don't have a score of null
create a row for each objec and a circle for each result so two maps or do a loop of 3  */

  return (
    <div className="result">
      <div className="result__modal">
        <img
          src={exit}
          alt="exit button"
          className="result__exit
          "
        />
        <h1 className="result__title">{result === "win" ? "Winner!" : "BMW M3 E30"}</h1>
        <img src={fullImage} alt="full car image" className="result__image" />
        <div className="result__headings">
          <h2 className="result__heading">Make</h2>
          <h2 className="result__heading">Model</h2>
          <h2 className="result__heading">Year</h2>
        </div>
        <section className="result__light-container ">
          <div className="result__row">
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
          <div className="result__row">
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
          <div className="result__row">
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
          <div className="result__row">
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
          <div className="result__row">
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
            <h2 className="result__summary__text">Points Summary</h2>
            <div className="result__value">
                <p className="result__value--text">This round: </p>
                <p className="result__value--value">{`${total}`}</p>
            </div>
            <div className="result__value">
                <p className="result__value--text">All-time:</p>
                <p className="result__value--value">-</p>
            </div>
        </div>
        <img src={share} alt="share button" className="result__share" />
      </div>
    </div>
  );
}
