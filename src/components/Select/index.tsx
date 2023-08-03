import './Select.scss'

export default function Select({}) {
  return (
    <div className="selector">
      <label htmlFor="cardle-select" className="select__label">
        Name
      </label>
      <select
        name="select"
        id="cardle-select"
        className="cardle__select"
        placeholder=""
      >
        <option value="1">ferrari</option>
        <option value="2">volkswagen</option>
        <option value="3">laborghini</option>
        <option value="4">aston martin</option>
      </select>
    </div>
  );
}
