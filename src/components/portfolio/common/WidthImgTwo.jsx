import React from 'react';
import styled from 'styled-components';

const StyledWidthImgTwo = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    img {
      width: calc(50% - (40px / 2));
      border-radius: 30px;
    }
    img + img {
      /* margin-left: 40px; */
    }
  }
  @media (max-width: 1024px) {
    /* margin-bottom: 24px; */
    margin-bottom: clamp(24px, 6vw, 64px);

    img {
      display: block;
      width: 100%;
      border-radius: 10px;
    }
    img:first-child {
      /* margin-bottom: 20px; */
      margin-bottom: clamp(20px, 5vw, 48px);
    }
  }
`;

const WidthImgTwo = ({ children }) => {
  return <StyledWidthImgTwo>{children}</StyledWidthImgTwo>;
};

export default WidthImgTwo;
