import { useState, useEffect } from "react";
import Select from "../Select";
import DateRangeSelect from "../DateRangeSelect";
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
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/makes/?fields[0]=id&fields[1]=make&sort[1]=make&pagination[start]=0&pagination[limit]=200`
      )
      .then((response) => {
        const makeObject = response.data.data;
        let makeList: string[] = [];

        makeObject.map((item: { id: number; attributes: { make: string } }) => {
          makeList.push(item.attributes.make);
        });

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

  const errorState = () =>{

  }

  return (
    <form action="" className="form">
      <Select
        class="select__input--make"
        name="Make"
        data={makes}
        updateForm={updateForm}
        selType="make"
        localFormVal={formValues.make}
        round={round.currentRound}
        roundBool = {round.make}
        isPlayed={isPlayed}
      />
      <Select
        class="select__input--model"
        name="Model"
        data={models}
        updateForm={updateForm}
        selType="model"
        localFormVal={formValues.model}
        round={round.currentRound}
        roundBool = {round.model}
        isPlayed={isPlayed}
      />
      <DateRangeSelect
        selType="year"
        updateForm={updateForm}
        localFormVal={formValues.year}
        round={round.currentRound}
        roundBool = {round.year}
        isPlayed={isPlayed}
      />
      {/* 
      if the error state is present button needs to be disabled
      after animation plays show error state to red for each individual input 
      make answer fields persist after animation and change when changed 
      create previous answer bucket to disable options that have previously been selected 
       */}
      <button
        type="submit"
        className="form__submit"
        onClick={(e) => {
          e.preventDefault();
          updateRound();
        }}
        disabled={
          !(
            (formValues.make && formValues.model && formValues.year) ||
            isPlayed
          )
        }
      >
        submit
      </button>
    </form>
  );
}
