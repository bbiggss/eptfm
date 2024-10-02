import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFieldMoveButton } from '../../../assets/styles/main/portfolioFieldButton.styled';

const PfFieldButton = (data) => {
  return (
    <StyledFieldMoveButton>
      <Link to={data && data.link}>
        <div className="pfFieldTag">
          {data && data.title}
          <div className="arrow"></div>
          {/* <span className="arrow">{'>'}</span> */}
          {/* <img className="arrow" src={imgSrc} alt="" /> */}
        </div>
      </Link>
    </StyledFieldMoveButton>
  );
};

export default PfFieldButton;
