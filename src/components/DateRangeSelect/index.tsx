import React, { useEffect, useState } from "react";
import "./DateRangeSelect.scss";

type SelectOption = {
  label: string;
  value: string;
};

type DateRangeProps = {
  updateForm: (valtype: string, val: string) => void;
  selType: string;
  localFormVal: string;
};

const generateDateRangeOptions = (): SelectOption[] => {
  const currentYear = new Date().getFullYear();
  const startYear = 1950;
  const yearRange = 5;
  const options: SelectOption[] = [];

  for (let year = startYear; year <= currentYear; year += yearRange) {
    const rangeStart = year;
    const rangeEnd = Math.min(year + yearRange - 1, currentYear);
    options.push({
      label: `${rangeStart} - ${rangeEnd}`,
      value: `${rangeStart}-${rangeEnd}`,
    });
  }

  return options;
};

export default function DateRangeSelect({
  updateForm,
  selType, localFormVal
}: DateRangeProps) {
  const [selectedOption, setSelectedOption] = useState("");

    // update current imput value if localStorage contains values && reload
    useEffect(() => {
      if (localFormVal) {
        setSelectedOption(localFormVal);
      }
    }, [localFormVal]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    updateForm(selType, event.target.value);
  };

  const dateRangeOptions = generateDateRangeOptions();

  return (
    <div className="select-data">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="select-data__input"
      >
        <option value="" className="select-data__value">
          Year range
        </option>
        {dateRangeOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="select-data__value"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
