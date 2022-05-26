import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Preloader.css";
function Preloader({ onPreloader }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    onPreloader(true);
    setTimeout(() => {
      onPreloader(false);
      navigate("/intro");
    }, 5000);
  }, [navigate, onPreloader]);
  return (
    <div className="preloader">
      <svg
        className="preloader__logo"
        width="103"
        height="52"
        fill="none"
        viewBox="0 0 103 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_431_3687)">
          <path
            d="M101.16 26.71C97.5933 22.0147 87.0931 11.5898 80.9044 11.5898C68.9724 11.5898 65.6261 52 51.5012 52C37.3763 52 34.03 11.5898 22.098 11.5898C15.9092 11.5898 5.40904 22.0147 1.85594 26.71C1.69892 26.9127 1.47697 27.0491 1.23119 27.0938C0.985414 27.1385 0.732468 27.0886 0.519208 26.9532C0.305949 26.8178 0.14683 26.6062 0.0713261 26.3575C-0.00417821 26.1088 0.00904932 25.8399 0.108558 25.6006C3.71203 16.9173 15.2702 0 23.0923 0C35.735 0 32.0838 40.2632 51.5012 40.2632C70.9186 40.2632 67.2674 0 79.91 0C87.7322 0 99.2824 16.9173 102.907 25.6034C103.387 26.7543 101.907 27.6945 101.16 26.71Z"
            fill="#3B4C66"
          />
        </g>
        <defs>
          <clipPath id="clip0_431_3687">
            <rect width="103" height="52" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h1 className="preloader__title">AVAMind</h1>
    </div>
  );
}
export default Preloader;
