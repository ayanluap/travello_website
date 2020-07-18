import React from 'react';

const Form = () => {
  return (
    <section className="section-form">
      <div className="row">
        <div className="form">
          <div className="form__container">
            <form action="#" className="form-content">
              <div className="u-margin-bottom-med">
                <h2 className="secondary-heading">Start booking now!</h2>
              </div>

              <div className="form-content__group">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="form-content__input"
                  placeholder="Enter Full Name"
                  required
                />
                <label htmlFor="fullName" className="form-content__label">
                  Full Name
                </label>
              </div>
              <div className="form-content__group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-content__input"
                  placeholder="Enter Email"
                  required
                />
                <label htmlFor="email" className="form-content__label">
                  Email
                </label>
              </div>

              <div className="form-content__group">
                <div className="form-content__radio-group">
                  <input
                    type="radio"
                    name="radBtn"
                    id="small"
                    className="form-content__radio-input"
                  />
                  <label htmlFor="small" className="form-content__radio-label">
                    <span className="form-content__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form-content__radio-group">
                  <input
                    type="radio"
                    name="radBtn"
                    id="large"
                    className="form-content__radio-input"
                  />
                  <label htmlFor="large" className="form-content__radio-label">
                    <span className="form-content__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
