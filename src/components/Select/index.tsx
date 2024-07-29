import { useState, useEffect, useRef } from "react";
import { ErrorState, ErrorStateKeys } from '../../types';

import "./Select.scss";

export type SelectProps = {
  data: string[];
  name: string;
  localFormVal: string;
  updateForm: (valtype: string, val: string) => void;
  selType: ErrorStateKeys;
  round: number;
  roundBool: boolean;
  isPlayed: boolean;
  errorState: boolean;
  setErrorState: React.Dispatch<React.SetStateAction<ErrorState>>
};


export default function Select({ data, name, localFormVal, updateForm, selType, round, roundBool, isPlayed, errorState, setErrorState }: SelectProps) {
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
    if (localFormVal) {
      setInputValue(localFormVal);
    } else {
      setInputValue("");
    }
    // state will change depending on reload or current gameplay
    // if reloaded fill only with local storage vals
    if (!roundBool && round !== 1) {
      setErrorState(prevState => ({ ...prevState, [selType]: true }));
    }
  }, [round]);
  // problem is roundbool is locally scoped and error state is passed down as 

  useEffect(() => {
    setSelectType({ ...selectType, [selType]: true });
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

  const filteredData: Array<string | number> = data.filter((item) =>
    item.toString().toLowerCase().includes(search.toLowerCase())
  );

  // clear input value if value selected isn't desired
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    // setInputValue("");
    setSearch(e.target.value);
    setErrorState(prevState => ({ ...prevState, [selType]: false }))
  }

  // select option to update input value
  function handleClick(e: React.MouseEvent<HTMLLIElement>): void {
    const liElement = e.target as HTMLLIElement;
    const liValue = liElement.getAttribute("data-value");
    if (liValue) {
      setInputValue(liValue);
      setSearch("");
      setFocus(false);
      updateForm(`${selType}`, liValue);
      setErrorState(prevState => ({ ...prevState, [selType]: false }));

    }
  }

  return (
    <div className="select" ref={selectRef}>
      <input
        type="text"
        id={`cardle-select-${selType}`}
        className={`select__input  ${errorState && "select__input--error"
          }`}
        placeholder={focus ? "" : name}
        autoComplete="off"
        onChange={handleInputChange}
        onFocus={() => {
          setFocus(true);
        }}
        value={inputVal}
        disabled={isPlayed}
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
