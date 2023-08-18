import { useState, useEffect } from "react";
import { carData } from "../../data/mock-car-data";
import Select from "../Select";
import DateRangeSelect from "../DateRangeSelect";
// import axios from "axios";
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
  const makes = [...new Set(carData.map((item) => item.make))].sort();
  const models = [
    ...new Set(
      carData
        .filter((item) => item.make == formValues.make)
        .map((item) => item.model)
    ),
  ].sort();

  // get value from selected makes and set model state
  // years will be year ranges

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
          e.preventDefault()
          updateRound()
        }}
      >
        submit
      </button>
    </form>
  );
}
