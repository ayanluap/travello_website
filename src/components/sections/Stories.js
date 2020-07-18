import React from 'react';
import nat_8 from '../../assets/nat-8.jpg';
import nat_9 from '../../assets/nat-9.jpg';
import nat_vid_1 from '../../assets/video.mp4';
import nat_vid_2 from '../../assets/video.webm';

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={nat_vid_1} type="video/mp4" />
          <source src={nat_vid_2} type="video/webm" />
          Your Browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="secondary-heading">we make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat_8} alt="nat-8" className="story__img" />
            <figcaption className="story__caption">Sanju Sarkar</figcaption>
          </figure>
          <div className="stiry__text">
            <h3 className="tertiary-heading u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              assumenda suscipit dolores rem, esse adipisci ipsum neque fugiat
              maiores similique velit odit, asperiores consectetur vero animi.
              Incidunt consequatur iste nostrum.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat_9} alt="nat-8" className="story__img" />
            <figcaption className="story__caption">Sanjay Majhi</figcaption>
          </figure>
          <div className="stiry__text">
            <h3 className="tertiary-heading u-margin-bottom-small">
              A Happy journey can change u comletely!
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              assumenda suscipit dolores rem, esse adipisci ipsum neque fugiat
              maiores similique velit odit, asperiores consectetur vero animi.
              Incidunt consequatur iste nostrum.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <a href="#!" className="btn-text">
          read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
