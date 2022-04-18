import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Video.css';

function Video({ lang }) {
  return (
    <div className="video content">
      <span className="user-name"></span>
      <p className="content__text">{translations[lang].videoText}</p>
      <div className="section-video__content-wrapper">
        <iframe
                className="iframe"
                src="https://www.youtube.com/embed/iLd4t8dVJD8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        <h2>{translations[lang].videoTitle}</h2>
      </div>      
    </div>
  );
}
export default Video;