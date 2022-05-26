import "../css/Checkbox.css";

function Checkbox({ value, register, condition, onChange }) {
  function handleChange(evt) {
    onChange(evt);
  }
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          onChange={handleChange}
          name={condition}
          className="checkbox__input"
          type="checkbox"
          value={value}
          {...register}
        />
        <span className="checkbox__box">
          <span className="checkbox__title">
            <span className="checkbox__title-span">{value}</span>
          </span>
          <span className="checkbox__ripple">
            <span className="checkbox__ripple-span"></span>
          </span>
        </span>
      </label>
    </div>
  );
}

export default Checkbox;
