import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.p`
  @media (min-width: 1557px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: 36px;
    position: relative;

    margin-top: ${(props) => {
      if (props.$PC_eLearningMarginTop) return '67px';
      return '0px';
    }};
    margin-bottom: 26px;
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: 26px;
    position: relative;

    margin-top: 26px;
    margin-bottom: 26px;
  }
  @media (max-width: 1024px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    /* font-size: 26px; */
    font-size: clamp(26px, 6.9vw, 100px);
    position: relative;

    margin-top: 80px;
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
