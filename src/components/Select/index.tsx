import { useState, useEffect, useRef } from "react";
import "./Select.scss";

export type SelectProps = {
  data: string[];
  name: string;
  class: string;
  localFormVal: string;
  updateForm: (valtype: string, val: string) => void;
  selType: string;
  round: number;
  isPlayed: boolean;
};

export default function Select(props: SelectProps) {
  const [selectType, setSelectType] = useState({
    make: false,
    model: false,
    year: false,
  });
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputValue] = useState("");

  const selectRef = useRef<HTMLDivElement>(null);

  // update current input value if localStorage contains values && reload
  useEffect(() => {
    if (props.localFormVal) {
      setInputValue(props.localFormVal);
    } else {
      setInputValue("");
    }
  }, [props.round]);

  useEffect(() => {
    setSelectType({ ...selectType, [props.selType]: true });
  }, []);

  useEffect(() => {
    // Attach a click event listener to the window
    const handleWindowClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setFocus(false); // Hide the dropdown when clicking outside
      }
    };

    window.addEventListener("click", handleWindowClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
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
      props.updateForm(`${props.selType}`, liValue);
    }
  }

  return (
    <div className="select" ref={selectRef}>
      <input
        type="text"
        id={`cardle-select-${props.selType}`}
        className={`select__input ${props.class}`}
        placeholder={focus? "": props.name}
        onChange={handleInputChange}
        onFocus={() => setFocus(true)}
        value={inputVal}
        disabled={props.isPlayed}
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
