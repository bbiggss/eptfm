import React from 'react';
import styled from 'styled-components';

const StyledTransportation = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    font-size: 22px;
    letter-spacing: -2%;
    line-height: auto;
    p {
      color: #767676;
      margin-left: 10px;
    }
    span {
      color: #292929;
    }
    margin-right: ${(props) => {
      if (props.$mobileMargin) return '120px';
    }};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    position: relative;
    display: flex;
    /* align-items: center; */

    font-size: 22px;
    letter-spacing: -2%;
    line-height: auto;
    .transportationImgWrap {
      width: 50px;
      /* background-color: red; */
      text-align: center;
      img {
        width: 60%;
      }
    }
    .transportationTexts {
      width: 241px;
      margin-left: 5px;

      color: #767676;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
    span {
      color: #292929;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
    margin-bottom: ${(props) => {
      if (props.$mobileMargin) return '14px';
    }};
  }
`;

const Transportation = (data) => {
  return (
    <StyledTransportation $mobileMargin={data.$mobileMargin}>
      <div className="transportationImgWrap">
        <img src={data.src} alt="" />
      </div>
      <p className="transportationTexts">
        <span>{data.mot}</span>
        {data.location}
      </p>
    </StyledTransportation>
  );
};

export default Transportation;
