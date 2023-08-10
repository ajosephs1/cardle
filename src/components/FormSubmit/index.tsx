import { useState, useEffect } from "react";
import  {carData}  from "../../mock-car-data";
import Select from "../Select";
// import axios from "axios";
import "./FormSubmit.scss";


export default function FormSubmit() {
  // const [makes, setMakes] = useState(null);

  const makes = [...new Set(carData.map(item => item.make))].sort()

  // get value from selected makes and set model state 
  // years will be year ranges 


  // useEffect(() => {
  //   axios({
  //       method: "get",
  //       url: `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes`,
  //       withCredentials: false,
  //     })
  //     .then((response) => {
  //       const carMakes = response.data["Makes"];
  //       setMakes(carMakes);
  //     })
  //     .catch((error) => error);
  // }, []);

  // console.log(makes);
  // if (!makes) {
  //   console.log("makes loading...");
  // }
  return (
    <form action="" className="form">
      <Select class="select__input--make" name="Make" data={makes}/>
      {/* <Select class="select__input--model" name="Model" /> */}
      {/* <Select class="select__input--year" name="Year" /> */}
      <button type="submit" className="form__submit">submit</button>
    </form>
  );
}
