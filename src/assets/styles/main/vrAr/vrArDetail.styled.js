import styled from 'styled-components';

export const VrArDetailBox = styled.div`
  max-width: 1920px;
  width: 80%;
  /* background-color: beige; */
  margin: auto;

  .container {
    width: 1260px;
    /* background-color: yellow; */
    margin: auto;
    text-align: center;

    .mainImg {
      display: flex;
      justify-content: center;
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      img:first-child {
        position: absolute;
        left: -123px;
        top: -80px;
      }
      div {
        text-align: left;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 59px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
        }
      }
      img:last-child {
        margin-top: 152px;
      }
    }

    .projectContainer {
      display: flex;
      text-align: left;
      padding-bottom: 160px;
      &:last-child {
        padding-bottom: 200px;
      }
      .img {
        width: 50%;
      }
      .texts {
        width: 50%;
        display: flex;
        align-items: center;
        line-height: 38px;
        letter-spacing: -2%;

        color: #767676;
        font-size: 24px;

        &.positionRight {
          justify-content: flex-end;
        }
      }
    }
  }
`;
