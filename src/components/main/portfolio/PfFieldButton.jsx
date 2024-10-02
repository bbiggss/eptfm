import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledFieldMoveButton } from '../../../assets/styles/main/portfolioFieldButton.styled';

const PfFieldButton = forwardRef((props, ref) => {
  return (
    <StyledFieldMoveButton>
      <Link to={props && props.link}>
        <div className="pfFieldTag slideUp" ref={ref}>
          {props && props.title}
          <div className="arrow"></div>
          {/* <span className="arrow">{'>'}</span> */}
          {/* <img className="arrow" src={imgSrc} alt="" /> */}
        </div>
      </Link>
    </StyledFieldMoveButton>
  );
});

export default PfFieldButton;
