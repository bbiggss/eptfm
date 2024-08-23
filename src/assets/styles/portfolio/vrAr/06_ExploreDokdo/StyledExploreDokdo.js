import styled from 'styled-components';

export const StyledExploreDokdo = styled.div`
  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      .manOnEarth {
        position: absolute;
        /* width: 606px; */
        width: clamp(320px, 31.5vw, 606px);
        bottom: -237px;
        right: 0;
      }
    }
    .introductionWrapper {
      margin-bottom: 160px;
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      position: relative;
      margin-top: 50px;
      .manOnEarth {
        position: absolute;
        /* width: 192px; */
        width: clamp(192px, 50vw, 320px);
        bottom: -91px;
        right: 0;
      }
    }
    .introductionWrapper {
      text-align: center;
      margin-top: 107px;
      margin-bottom: 80px;
    }
  }
`;
