import styled from 'styled-components';

export const FooterBox = styled.div`
  margin: 0 auto;
  background-color: #f0f2f4;
  font-family: 'NanumSquareB';
  color: #767676;
  position: relative;

  @media (min-width: 1025px) {
    height: clamp(137px, 18vw, 360px);
    max-width: 1920px;

    .footerContainer {
      position: relative;
      width: 80%;
      margin: 0 auto;
    }
    #footerImg {
      max-width: 133px;
      width: 6.9vw;
      margin-top: clamp(30px, 4.1vw, 80px);
      margin-bottom: clamp(18px, 1.8vw, 36px);
    }
    #info {
      span {
        font-size: var(--pc-font-size-20px);
        letter-spacing: -0.02em; // 자간
      }
      .address {
        margin-bottom: clamp(18px, 1.8vw, 36px);
      }
    }
    .copyright {
      font-size: var(--pc-font-size-20px);
    }
    .socialMediaLinkWrapper {
      a:first-child {
        margin-right: 18px;
      }
      img {
        max-width: 60px;
        width: 3.1vw;
      }
      position: absolute;
      right: clamp(0px, 9.48vw, 182px);
      top: var(--pc-60px);
    }
  }
  @media (max-width: 1024px) {
    /* height: 153px; */
    height: 40.8vw;

    .footerContainer {
      position: relative;
      width: 80%;
      margin: 0 auto;

      #footerImg {
        /* width: 67px;
        height: 9px;
        margin-top: 30px;
        margin-bottom: 18px; */

        width: 17.87vw;
        height: 2.4vw;
        margin-top: 8vw;
        margin-bottom: 4.8vw;
      }

      #info {
        .telFaxMail {
          font-size: var(--mobile-footer-font-size);

          .mail {
            display: block;
            /* margin-top: 3px; */
            margin-top: 1.6vw;
          }
        }
        .customSpan {
          display: table-column;
        }
        .address {
          font-size: var(--mobile-footer-font-size);
          margin-top: 1.6vw;
          margin-bottom: 3.5vw;
        }
      }
      .copyright {
        /* font-size: 9px; */
        font-size: 2.4vw;
      }
    }
    .socialMediaLinkWrapper {
      position: absolute;
      right: var(--mobile-30px);
      top: 0;
      margin-top: 5.33vw;

      img {
        width: var(--mobile-fixedButton);
      }
      a:first-child {
        margin-right: 2.67vw;
      }
    }
  }
`;
