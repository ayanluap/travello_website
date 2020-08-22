import React from 'react';
import nat_8 from '../../assets/nat-8.jpg';
import nat_9 from '../../assets/nat-9.jpg';

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat_8} alt="" className="popup__img" />
          <img src={nat_9} alt="" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="secondary-heading u-margin-bottom-small">
            Start Booking now
          </h2>
          <h3 className="tertiary-heading u-margin-bottom-small">
            important &ndash; please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nostrum assumenda quidem quam, doloribus suscipit repellat deleniti,
            harum sapiente minima reiciendis. Tenetur corporis quas, repellendus
            unde rem cum consequatur id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero id soluta tempora est ipsum tempore odio.
          </p>
          <a href="#" className="btn btn--green">
            book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
