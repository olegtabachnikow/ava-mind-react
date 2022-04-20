import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Video.css';

function Video({ lang, currentUser }) {
  return (
    <div className="video content">
      <p className="content__text"><span className="user-name">{currentUser}</span>{translations[lang].videoText}</p>
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