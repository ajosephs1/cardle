import Select from "../Select";
import axios from "axios";
import { useState, useEffect } from "react";
import "./FormSubmit.scss";

export default function FormSubmit() {
  const [makes, setMakes] = useState(null);

  useEffect(() => {
    axios({
        method: "get",
        url: `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes`,
        withCredentials: false,
      })
      .then((response) => {
        const carMakes = response.data["Makes"];
        setMakes(carMakes);
      })
      .catch((error) => error);
  }, []);

  console.log(makes);
  if (!makes) {
    console.log("makes loading...");
  }
  return (
    <form action="" className="form">
      <Select className="select__input--make" name="Make" />
      <Select className="select__input--model" name="Model" />
      <Select className="select__input--year" name="Year" />
      <button type="submit" className="form__submit">submit</button>
    </form>
  );
}
