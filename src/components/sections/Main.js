import React from 'react';
import nat_1_large from '../../assets/nat-1-large.jpg';
import nat_2_large from '../../assets/nat-2-large.jpg';
import nat_3_large from '../../assets/nat-3-large.jpg';

const Main = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="secondary-heading">
          Exciting Tours For Adventurous Peoples
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="tertiary-heading u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
            doloribus magni a praesentium odio quae numquam iste? Odit sed quis
            harum aperiam nihil velit tempora facere impedit eligendi
            repudiandae?
          </p>

          <h3 className="tertiary-heading u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
            doloribus magni a praesentium odio quae numquam iste.
          </p>

          <a href="#!" className="btn-text">
            Learn More &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={nat_1_large}
              alt="natours_1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={nat_2_large}
              alt="natours_2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={nat_3_large}
              alt="natours_3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
