import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.p`
  @media (min-width: 1557px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: clamp(10px, 1.8vw, 36px);
    position: relative;

    margin-top: ${(props) => {
      // if (props.$PC_eLearningMarginTop) return '102px';
      if (props.$PC_eLearningMarginTop) return 'clamp(50px,4.5vw,102px)';
      return '0px';
    }};
    margin-bottom: clamp(10px, 1.3vw, 26px);
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: 26px;
    position: relative;

    margin-bottom: 22px;
  }
  @media (max-width: 1024px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    /* font-size: 26px; */
    font-size: clamp(26px, 5.9vw, 100px);
    position: relative;

    margin-bottom: 30px;
  }
`;

const Category = (data) => {
  return (
    <StyledCategory $PC_eLearningMarginTop={data.PC_eLearningMarginTop} style={data && data.style}>
      {data.category}
    </StyledCategory>
  );
};

export default Category;
