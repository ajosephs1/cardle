import './Select.scss'

export type SelectProps = {
  className: string;
  name: string;
  date?: object
}

export default function Select(props: SelectProps) {
  return (
    <div className="select">
      {/* include animation for when selected label goes to top left */}
      {/* <label htmlFor="cardle-select" className="select__label">
        {props.name}
      </label> */}
      <select
        name={props.name}
        id="cardle-select"
        className= {`select__input ${props.className}`}
        placeholder={props.name}
      >
        <option value="1">{props.name}</option>
        <option value="2">volkswagen</option>
        <option value="3">laborghini</option>
        <option value="4">aston martin</option>
      </select>
    </div>
  );
}
