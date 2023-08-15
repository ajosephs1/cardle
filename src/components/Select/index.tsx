import { useState, useEffect } from "react";
import "./Select.scss";

export type SelectProps = {
  data: Array<string | number>;
  name: string;
  class: string;
  updateForm: (valtype: string, val: string) => void;
  selType: string;
};

export default function Select(props: SelectProps) {
  // add state for type of select and pass down through props
  const [selectType, setSelectType] = useState({
    make: false,
    model: false,
    year: false,
  });
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputValue] = useState("");

  useEffect(() => {
    setSelectType({ ...selectType, [props.selType]: true });
  }, []);

  const filteredData: Array<string | number> = props.data.filter((item) =>
    item.toString().toLowerCase().includes(search.toLowerCase())
  );

  // clear input value if value selected isn't desired
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    setSearch(e.target.value);
  }

  // select option to update input value
  function handleClick(e: React.MouseEvent<HTMLLIElement>): void {
    const liElement = e.target as HTMLLIElement;
    const liValue = liElement.getAttribute("data-value");
    if (liValue) {
      setInputValue(liValue);
      setSearch("");
      setFocus(false);
      props.updateForm(`${props.selType}`, liValue)
    }
    // else if (liValue && selectType.model){}
    // else if (liValue && selectType.year){}
  }

  return (
    // may have to return a different div for each typeof element
    <div className="select">
      <input
        type="text"
        id="cardle-select"
        className={`select__input ${props.class}`}
        placeholder={props.name}
        onChange={handleInputChange}
        onFocus={() => setFocus(true)}
        value={inputVal}
      />
      {focus && (
        <ul className="select__data">
          {filteredData.map((item, index) => (
            <li
              className="select__value"
              key={index}
              data-value={item}
              onClick={handleClick}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
