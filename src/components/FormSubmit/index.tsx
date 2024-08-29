import { useState, useEffect } from "react";
import { ErrorState } from '../../types';
import Select from "../Select";
import axios from "axios";
import "./FormSubmit.scss";

type FormProps = {
  formValues: {
    make: string;
    model: string;
    year: string;
  };
  updateForm: (valtype: string, val: string) => void;
  updateRound: () => void;
  isPlayed: boolean;
  round: {
    currentRound: number;
    multiplier: number;
    currentPoints: number;
    make: boolean;
    model: boolean;
    year: boolean;
  };
};


export default function FormSubmit({
  formValues,
  updateForm,
  updateRound,
  isPlayed,
  round,
}: FormProps) {
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [errorState, setErrorState] = useState<ErrorState>({
    make: false,
    model: false,
    year: false,
  });
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // get make inputValues
  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/makes/?fields[0]=id&fields[1]=make&sort[1]=make&pagination[start]=0&pagination[limit]=200`
      )
      .then((response) => {
        const makeObject = response.data.data;

        let makeList: string[] = makeObject.map(
          (item: { id: number; attributes: { make: string } }) => item.attributes.make
        );
        
        setMakes(makeList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // get model inputValues
  useEffect(() => {
    // const currentMake = formValues.make ? formValues.make : localFormVals.make;
    const currentMake = formValues.make ? formValues.make : "";
    axios
      .get(
        `${BASE_URL}/models?fields[0]=model&sort[0]=model&populate[make][fields][0]=make&filters[make][make][$eqi]=${currentMake}&pagination[limit]=200`
      )
      .then((response) => {
        const modelObject = response.data.data;
        let modelList: string[] = [];

        modelObject.map(
          (item: {
            id: number;
            attributes: {
              model: string;
              make: {
                data: {
                  id: number;
                  attributes: { make: string };
                };
              };
            };
          }) => {
            modelList.push(item.attributes.model);
          }
        );

        setModels(modelList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [formValues.make]);

  // create date ranges 
  useEffect(() => {

    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    const options = [];

    for (let year = startYear; year <= currentYear; year++) {
      options.push(year.toString())
    }
    setYears(options);
  }, [])

  return (
    <form action="" className="form">
      <Select
        name="Make"
        data={makes}
        updateForm={updateForm}
        selType="make"
        localFormVal={formValues.make}
        round={round.currentRound}
        roundBool={round.make}
        isPlayed={isPlayed}
        errorState={errorState.make}
        setErrorState={setErrorState}
      />
      <Select
        name="Model"
        data={models}
        updateForm={updateForm}
        selType="model"
        localFormVal={formValues.model}
        round={round.currentRound}
        roundBool={round.model}
        isPlayed={isPlayed}
        errorState={errorState.model}
        setErrorState={setErrorState}
      />
      <Select
        name="Year"
        data={years}
        updateForm={updateForm}
        selType="year"
        localFormVal={formValues.year}
        round={round.currentRound}
        roundBool={round.year}
        isPlayed={isPlayed}
        errorState={errorState.year}
        setErrorState={setErrorState}
      />

      <button
        type="submit"
        className="form__submit"
        onClick={(e) => {
          e.preventDefault();
          updateRound();
        }}
        // submit button is disabled if there are no values in the inputs or if the inputs aren't changed from an incorrect answer
        // if game is played submit button displays result modal
        disabled={
          !!(
            !(formValues.make && formValues.model && formValues.year) || (errorState.make || errorState.model || errorState.year) || (formValues.year.length !== 4)
          )
        }
      >
        submit
      </button>
    </form>
  );
}
