import styled from 'styled-components';

export const ContactUsBox = styled.div`
  overflow: hidden;
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
  .title {
    font-size: 100px;
    color: #191919;
    margin-bottom: 42px;
  }
  .subTitle {
    font-size: 26px;
    color: #767676;
  }

  .transportation {
    /* background-color: yellow; */
    display: flex;
    margin-top: 31px;
    margin-bottom: 202px;

    .subway,
    .bus {
      display: flex;
      align-items: center;
      font-size: 22px;
      letter-spacing: -2%;
      line-height: auto;
      p {
        color: #767676;
        margin-left: 10px;
      }
      span {
        color: #292929;
      }
    }

    .subway {
      margin-right: 120px;
    }
  }

  hr {
    width: 1260px;
    color: #767676;
    opacity: 50%;
    margin: 100px 0;
  }

  #common {
    display: flex;
    justify-content: space-between;
    width: 1260px;
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
        background-color: white;
        p {
          width: 240px;
          height: 30px;
          font-size: 26px;
        }
      }
    }
  }

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
`;
