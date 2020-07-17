import React from 'react';

const FlipingCards = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="secondary-heading">most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <p className="card__details">
                <ul>
                  <li>5 Day tour</li>
                  <li>Up to 30 Peoples</li>
                  <li>2 Day guides</li>
                  <li>Sleep in cozy Hotels</li>
                  <li>Difficulty: Easy</li>
                </ul>
              </p>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">Rs.999/-</p>
                </div>
                <a href="#!" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The forest hiker
                </span>
              </h4>
              <p className="card__details">
                <ul>
                  <li>5 Day tour</li>
                  <li>Up to 30 Peoples</li>
                  <li>2 Day guides</li>
                  <li>Sleep in cozy Hotels</li>
                  <li>Difficulty: Easy</li>
                </ul>
              </p>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">Rs.1,999/-</p>
                </div>
                <a href="#!" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The snow adventure
                </span>
              </h4>
              <p className="card__details">
                <ul>
                  <li>5 Day tour</li>
                  <li>Up to 30 Peoples</li>
                  <li>2 Day guides</li>
                  <li>Sleep in cozy Hotels</li>
                  <li>Difficulty: Easy</li>
                </ul>
              </p>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">Rs.2,999/-</p>
                </div>
                <a href="#!" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text">
        <a href="#!" className="btn btn--green">
          discover all tours
        </a>
      </div>
    </section>
  );
};

export default FlipingCards;
