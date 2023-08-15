import { useState, useEffect } from "react";
import { carData } from "../../data/mock-car-data";
import Select from "../Select";
import DateRangeSelect from "../DateRangeSelect";
// import axios from "axios";
import "./FormSubmit.scss";

export default function FormSubmit() {
  const [selMake, setSelMake] = useState({
    name: "",
    isSel: false,
  });

  const [formVals, setFormVals] = useState({
    make: "",
    model: "",
    year: "",
  });

  // need a state for all value for submit in an object{make,model,year}
  //
  function updateForm(valtype: string, val: string) {
    setFormVals({ ...formVals, [valtype]: val });
  }

  const makes = [...new Set(carData.map((item) => item.make))].sort();
  const models = [
    ...new Set(
      carData
        .filter((item) => item.make == formVals.make)
        .map((item) => item.model)
    ),
  ].sort();

  console.log(formVals);
  console.log(models);

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
      {/* <Select class="select__input--year" name="Year" /> */}
      {/* for the final input we add date ranges if the date is between the date range then the answer is correct*/}
      <DateRangeSelect />
      <button type="submit" className="form__submit">
        submit
      </button>
    </form>
  );
}
