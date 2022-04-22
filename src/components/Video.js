import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow_back.svg";
import '../css/Content.css';
import '../css/Video.css';

function Video({ lang, currentUser }) {
  return (
    <div className="video">
      <div className="video-wrapper">
        <div className="section-video__video-wrapper">
          <p className="content__title">{translations[lang].videoTitle}</p>
          <iframe
                    className="iframe"
                    src="https://www.youtube.com/embed/iLd4t8dVJD8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
          </iframe>
        </div>      
        <div className="section-video__content-wrapper">
            <p className="content__text"><span className="user-name">{currentUser}</span>{translations[lang].videoText}</p>
            <p className="content__text">{translations[lang].videoTitleEnd}</p>
        </div> 
      </div>
      <div className="next-button__container">  
        <p className="content__text">{translations[lang].videoBack}</p>      
        <Link className="back-button" to="/thanks">
          <img
            className="next-button__icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="next-button__overlay"></div>
        </Link>
      </div>     
    </div>
  );
}
export default Video;