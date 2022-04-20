import "../css/Checkbox.css";

function Checkbox({ value }) {
  return (
        <div className="checkbox">
                  <label className="form__label">
                    <input
                      className="section-stances__input"
                      type="checkbox"                      
                      value={value}
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
