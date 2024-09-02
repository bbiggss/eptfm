import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const pfFieldMobileWidth = '100%';

const StyledFieldMoveButton = styled.div`
  /* 영어폰트 */
  :hover {
    background-color: #48c2c5;
    border-radius: 999px;
    .pfFieldTag {
      color: #ffffff;
    }
  }
  .pfFieldTag {
    position: relative;
    font-family: 'Roboto-Medium';
  }
  @media (min-width: 1025px) {
    width: 380px;
    /* 150-16 */
    .pfFieldTag {
      height: 90px;
      line-height: 90px;

      margin-bottom: 24px;
      display: block;
      border: 1px solid #767676;
      border-radius: 999px;
      text-align: center;

      color: #767676;
      font-size: 26px;
    }
    a {
      display: block;
      /* background-color: yellow; */
      text-decoration: none;
    }

    .arrow {
      width: 6px;
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 1024px) {
    /* 150-16 */
    .pfFieldTag {
      height: 60px;
      line-height: 60px;

      margin-bottom: 16px;
      display: block;
      width: ${pfFieldMobileWidth};
      border: 1px solid #767676;
      border-radius: 999px;
      text-align: center;

      color: #767676;
      font-size: 18px;
    }
    a {
      display: block;
      width: ${pfFieldMobileWidth};
      text-decoration: none;
    }
    .arrow {
      width: 6px;
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const PfFieldButton = (data) => {
  return (
    <StyledFieldMoveButton>
      <Link to={data && data.link}>
        <div className="pfFieldTag">
          {data && data.title}
          <img className="arrow" src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow.png`} alt="" />
        </div>
      </Link>
    </StyledFieldMoveButton>
  );
};

export default PfFieldButton;
