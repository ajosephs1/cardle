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
};

export default function FormSubmit({
  formValues,
  updateForm,
  updateRound,
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

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/models?fields[0]=model&populate[make][fields][0]=make&filters[make][make][$eqi]=${formValues.make}&pagination[limit]=200`
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

  return (
    <form action="" className="form">
      <Select
        class="select__input--make"
        name="Make"
        data={makes}
        updateForm={updateForm}
        selType="make"
      />
      <Select
        class="select__input--model"
        name="Model"
        data={models}
        updateForm={updateForm}
        selType="model"
      />
      <DateRangeSelect selType="year" updateForm={updateForm} />
      <button
        type="submit"
        className="form__submit"
        // onSubmit={updateRound}
        onClick={(e) => {
          e.preventDefault();
          updateRound();
        }}
      >
        submit
      </button>
    </form>
  );
}
