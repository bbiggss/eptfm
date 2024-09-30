import React from 'react';
import styled from 'styled-components';

const StyledTransportation = styled.div`
  word-break: keep-all;
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    p {
      color: #767676;
      margin-left: 10px;
      font-size: var(--pc-font-size-22px);
    }
    span {
      color: #292929;
    }
    margin-right: ${(props) => {
      if (props.$mobileMargin) return 'clamp(0px, 6.25vw, 120px)';
    }};
  }

  @media (max-width: 1024px) {
    position: relative;
    display: flex;
    /* align-items: center; */

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
      /* width: 241px; */
      margin-left: 5px;

      color: #767676;
      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
      letter-spacing: -0.02em;
    }
    span {
      color: #292929;
      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
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
