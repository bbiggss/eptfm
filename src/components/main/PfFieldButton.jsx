import React from 'react';
import { Link } from 'react-router-dom';

const PfFieldButton = (data) => {
  return (
    <>
      <Link to={data && data.link}>
        <div className="pfFieldTag">{data && data.title}</div>
      </Link>
    </>
  );
};

export default PfFieldButton;
