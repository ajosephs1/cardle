import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import "./FormSubmit.scss";

export default function FormSubmit() {
  return (
    <form action="" className="formsubmit">
      <InputLabel id="formSelect">Car</InputLabel>
      <Select label="Car" className="form__select" id="formSelect">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </form>
  );
}
