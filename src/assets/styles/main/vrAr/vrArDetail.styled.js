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

    .portfolioTitle {
      display: inline-block;
      /* background-color: aqua; */
      /* border: 1px solid black; */
      margin-top: 73px;
      margin-bottom: 80px;

      p:first-child {
        text-align: left;
        margin-bottom: 24px;

        color: #999999;
        font-size: 22px;
      }
      p:last-child {
        font-size: 64px;
        color: #48c2c5;
      }
    }

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
  }

  .btnBox {
    position: fixed;
    right: 72px;
    bottom: 0;
    /* background-color: yellow; */
    img {
      cursor: pointer;
      border-radius: 50%;
    }
    img:last-child {
      margin-top: 24px;
      margin-bottom: 60px;
    }
  }
  /* 공통컴포넌트 */
  .common {
    display: flex;
    text-align: left;
    padding-bottom: 160px;
    .img {
      width: 50%;
    }
    .texts {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 38px;
      letter-spacing: -2%;

      color: #767676;
      font-size: 24px;
    }
  }
`;
