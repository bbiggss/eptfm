import React from 'react';
import { Link } from 'react-router-dom';

const PfFieldButton = (data) => {
  return (
    <>
      <Link to={data && data.link}>
        <div className="pfFieldTag">
          {data && data.title}
          <img
            className="arrow"
            src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow.png`}
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default PfFieldButton;
