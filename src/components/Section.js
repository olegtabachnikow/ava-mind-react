import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import '../css/Section.css';

function Section({ children }) {
  return (
    <div className="section">
      {children}
      <div className="section__button-container">
        <Link className="section__link" to="#">
          <img
            className="section__button-icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="section__button-overlay"></div>
        </Link>
      </div>
    </div>
  );
}

export default Section;
