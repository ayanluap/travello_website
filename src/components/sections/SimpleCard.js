import React from 'react';

const SimpleCard = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-globe feature-box__icon u-margin-bottom-med"></i>
            <h3 className="tertiary-heading u-margin-bottom-small">
              Explore The World
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam, sunt?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="far fa-compass feature-box__icon u-margin-bottom-med"></i>
            <h3 className="tertiary-heading u-margin-bottom-small">
              meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam, sunt?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="far fa-map feature-box__icon u-margin-bottom-med"></i>
            <h3 className="tertiary-heading u-margin-bottom-small">
              find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam, sunt?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="far fa-heart feature-box__icon u-margin-bottom-med"></i>
            <h3 className="tertiary-heading u-margin-bottom-small">
              live a healthier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quam, sunt?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCard;
