import styled from 'styled-components';

export const StyledExploreFreiburg = styled.div`
  .fff6df {
    background-color: #fff6df;
  }
  .wrapper {
    display: flex;
  }
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .heroWrapper {
      text-align: center;
      margin-top: 88px;
      margin-bottom: 52px;
    }
    .topText {
      text-align: center;
      color: #292929;
      font-size: 28px;
      padding-top: 160px;
      padding-bottom: 100px;
    }
    .bicycleGirl {
      position: absolute;
      right: 152px;
      top: -27px;
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      margin: 0 var(--mobile-margin);
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .topText {
      color: #292929;
      text-align: center;
      font-size: 18px;
      line-height: 26px;

      padding-bottom: 80px;
    }
    .fff6df {
      text-align: center;
      .bicycleGirl {
        width: 153px;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 24px;
      }
    }
  }
`;
