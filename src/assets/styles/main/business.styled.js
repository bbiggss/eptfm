import styled from 'styled-components';
// import { businessBg } from '../../images';

export const BusinessBox = styled.div`
  font-family: 'Roboto-Medium';
  background-image: url(${process.env.PUBLIC_URL}/assets/images/main/business_bg.png);
  background-repeat: no-repeat;
  width: 100%;
  /* background-size: cover; */

  margin-top: 18px;

  #businessTitle {
    font-family: 'Roboto-Regular';
  }

  @media (min-width: 1025px) {
    /* background-size: cover; */
    /* height: 1180px; */
    height: auto;
    margin-top: 240px;
    padding-bottom: 200px;

    #container {
      /* padding: 100px 0; */
      & #businessTitleBox {
        width: 100%;
        height: 380px;
      }
    }

    & #businessTitle {
      text-align: center;
      color: #ffffff;
      font-size: 100px;
      margin: 0;
      padding-top: 200px;
    }

    #contentsWrap {
      margin: 0 30px;
      ul {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 28px;
        list-style: none;
        justify-content: center;
      }
    }
  }
  @media (max-width: 1024px) {
    background-size: cover;
    width: 100%;
    #container {
      #businessTitleBox {
        margin: 0 8vw;
        & #businessTitle {
          padding-top: 80px;
          padding-bottom: 40px;

          color: #fff6f6;
          font-size: 36px;
          font-weight: 500;
          text-align: left;
        }
      }

      & #contentsWrap {
        /* display: flex;
        justify-content: center; */
        margin: 0 8vw;
      }
      & #contentsWrap ul li:nth-child(2) {
        margin: 24px 0;
      }
      & #contentsWrap ul li:nth-child(3) {
        margin-bottom: 80px;
      }
    }
  }
`;
