import './Select.scss'

export type SelectProps = {
  data: string[] | number[];
  name: string;
  class: string
}

export default function Select(props: SelectProps) {

  console.log(props.data)
  return (
    <div className= "select">
      {/* include animation for when selected label goes to top left */}
      {/* <label htmlFor="cardle-select" className="select__label">
        {props.name}
      </label> */}
      <select
        name={props.name}
        id="cardle-select"
        className= {`select__input ${props.class}`}
        placeholder={props.name}
      >
        <option value="1">{props.name}</option>
        {props.data.map(item => (<option key={crypto.randomUUID()} value={item}>{item}</option>))}
      </select>
    </div>
  );
}
