import "../css/Checkbox.css";

function Checkbox({ value, register, condition, onChange }) {
  function handleChange(evt) {
    onChange(evt);
  }
  return (
        <div className="checkbox">
                  <label className="form__label">
                    <input onChange={handleChange}
                      name={condition}
                      className="section-stances__input"
                      type="checkbox"                      
                      value={value}
                      {...register}
                    />
                    <span className="checkbox-box">
                      <span className="checkbox-title">
                        <span>{value}</span>
                      </span>
                      <span className="checkbox-ripple">
                        <span></span>
                      </span>
                    </span>
                  </label>
            </div>
    ) 
}

export default Checkbox;
