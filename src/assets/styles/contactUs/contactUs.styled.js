import styled from 'styled-components';

export const ContactUsBox = styled.div`
  overflow-x: hidden;
  .ellipseArea {
    position: relative;
    z-index: -1;
    .ellipse1 {
      position: absolute;
    }
    .ellipse2 {
      position: absolute;
      right: 0;
    }
  }
  hr {
    border-style: solid;
    border-color: rgba(118, 118, 118, 0.5);
    border-width: 1px 0 0 0;
    height: 0px;
  }
  .mapWrap {
    img {
      width: 100%;
    }
  }

  @media (min-width: 1025px) {
    .title {
      text-align: center;
      font-size: 100px;
      color: #191919;
      margin-bottom: 42px;
    }
    .subTitle {
      text-align: center;
      font-size: 26px;
      color: #767676;
    }

    .transportation {
      /* background-color: yellow; */
      display: flex;
      margin-top: 31px;
      margin-bottom: 202px;
    }

    hr {
      width: 1260px;
      margin: 100px 0;
    }

    #ContactTextsLinkBoxWrap {
      display: flex;
      justify-content: space-between;
      max-width: 1260px;
      width: 100%;
      text-align: left;
      margin-bottom: 80px;

      .c1 {
        /* background-color: yellow; */

        p:first-child {
          color: #292929;
          font-size: 32px;
        }
        p:last-child {
          color: #767676;
          font-size: 22px;
          margin-top: 28px;
        }
      }

      .c2 {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          border: 1px solid #767676;
          width: 380px;
          height: 90px;
          color: #767676;
          cursor: pointer;
          background-color: transparent;
          .popupText {
            width: 240px;
            height: 30px;
            font-size: 26px;
          }
        }
      }
    }
    .inquiryImg {
      text-align: center;
    }
  }

  @media (min-width: 1401px) {
    .inquiryImg {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(3, auto);
      padding: 0;
      gap: 8px 60px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      /* padding: 0;
      padding-bottom: 200px; */

      li {
        list-style: none;
        p {
          margin-top: 24px;
          color: #292929;
          font-size: 22px;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    /* background-color: yellow; */
    .smallScreen {
      width: 90%;
      margin: auto;
    }
    hr {
      width: 100%;
    }

    .inquiryImg {
      display: grid;
      /* grid-template-columns: repeat(3, auto); */
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 60px;

      /* 앞: 상하간격 뒤: 좌우간격 */
      /* padding: 0;
      padding-bottom: 200px; */

      li {
        list-style: none;
        img {
          width: 100%;
        }
        p {
          margin-top: 24px;
          color: #292929;
          font-size: 22px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .ellipse1 {
      width: 375px;
    }
    .ellipse2 {
      display: none;
    }
    .Wrapper {
      margin: 0 var(--mobile-margin);
    }
    .title {
      text-align: center;
      color: #191919;
      font-size: clamp(36px, 9.6vw, 100px);

      padding-top: 50px;
      margin-bottom: 20px;
    }
    .subTitle {
      text-align: center;
      color: #767676;
      font-size: clamp(16px, 4vw, 100px);
      /* line-height: 24px; */
      letter-spacing: -0.02em;
      white-space: nowrap;
    }
    hr {
      width: 100%;
      margin: 60px 0;
    }
    #ContactTextsLinkBoxWrap {
      text-align: left;
      margin-bottom: 50px;

      .c1 {
        p:first-child {
          color: #292929;
          font-size: clamp(22px, 5.8vw, 100px);
          letter-spacing: -0.02em;

          margin-bottom: 10px;
        }
        p:last-child {
          color: #767676;
          font-size: clamp(16px, 4vw, 100px);
          /* line-height: 24px; */
          letter-spacing: -0.02em;
          max-width: 500px;
        }
      }

      .c2 {
        button {
          border-radius: 50px;
          border: 1px solid #767676;
          width: 100%;
          aspect-ratio: 315 / 60;
          color: #767676;
          cursor: pointer;
          background-color: transparent;
          margin-top: 30px;
          margin-bottom: 50px;

          position: relative;
          display: flex;
          align-items: center;
          .popupText {
            width: 100%;
            color: #767676;
            text-align: center;
            font-size: clamp(18px, 4.8vw, 100px);
            letter-spacing: -0.02em;
          }

          .moveIcon {
            width: 26px;
            position: absolute;
            right: 0;
            margin-right: 17px;
          }
        }
      }
    }

    .inquiryImg {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, auto);
      gap: 24px 0px;

      li {
        list-style: none;
        display: flex;
        img {
          min-width: 150px;
          width: 40vw;
          /* height: 110px; */
        }
        p {
          margin: auto 0px;
          margin-left: 14px;
          min-width: 129px;

          color: #292929;
          font-size: clamp(16px, 4vw, 100px);
          line-height: 24px;
          letter-spacing: -0.02em;
        }
      }
    }

    .transportation {
      margin-top: 24px;
      margin-bottom: 142px;
    }
  }
`;
