import styled from 'styled-components';

export const StyledBimetal = styled.div`
  @media (min-width: 1025px) {
    .heroAreaWrapper {
      position: relative;
      margin-top: 80px;
      margin-bottom: 100px;

      .introductionWrapper {
        right: 0;
        /* margin-right: 330px; */
        margin-right: clamp(100px, 17vw, 330px);
        position: absolute;
        text-align: right;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroAreaWrapper {
      position: relative;
      margin-top: 40px;
      margin-bottom: 80px;

      display: flex;
      justify-content: center;
      .introductionWrapper {
        position: absolute;
        text-align: center;
      }
    }
  }
`;
