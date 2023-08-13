import { useState } from "react";
import "./Select.scss";

export type SelectProps = {
  data: Array<(string|number)>;
  name: string;
  class: string;
};

export default function Select(props: SelectProps) {
  // onclick if searh is empty display a dropdown of all the data option
  // once typing filter search to include what's in the search box to lowecase everything
  //if name is model select search box is diabled
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputValue] = useState("")


  const filteredData: Array<(string|number)> = props.data.filter(item=> item.toString().toLowerCase().includes(search.toLowerCase()))

  // console.log(filteredData)
  return (
    <div className="select">
      <input
        type="text"
        id="cardle-select"
        className={`select__input ${props.class}`}
        placeholder={props.name}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
      />
      {focus && <ul className="select__data">{
        filteredData.map((item, index) => (<li key={index} onClick={setInputValue((item: React.setInputValue<string | number>) => void
          )}>{item}</li>))
      }</ul>}
    </div>
  );
}
