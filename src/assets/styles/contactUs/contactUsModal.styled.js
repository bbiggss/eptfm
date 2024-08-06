import styled from 'styled-components';

export const ContactUsModalBox = styled.div`
  .modalBackground {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: #071018;
    opacity: 90%;
  }

  .modalContainer {
    position: fixed;
    z-index: 3;
    max-width: 1260px;
    width: 80%;
    height: 800px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .inquiryContainer {
      max-width: 1140px;
      width: 80%;
      /* background-color: beige; */
      p {
        display: inline;
        font-size: 32px;
        color: #292929;
      }
      img {
        float: right;
        cursor: pointer;
      }
      hr {
        margin: 40px 0;
        color: #767676;
        background-color: #767676;
        opacity: 50%;
      }
      .inquiryInfos {
        display: flex;
        justify-content: space-between;
        /* background-color: yellow; */
        margin-bottom: 22px;
        p {
          font-size: 22px;
          color: #292929;
          width: 20%;
          display: flex;
          align-items: center;
          .dot {
            color: #4ac2c5;
            /* font-size: 232px; */
          }
        }
        input {
          max-width: 940px;
          width: 80%;
          border-radius: 10px;
          border: 1px solid #dbdbdb;
          padding: 15px;

          &::placeholder {
            font-size: 18px;
            color: #bbbbbb;
            font-family: 'NanumSquareB';
          }
        }
        &.inquiryContent {
          position: relative;
          p {
            display: block;
            padding-top: 15px;
          }
          textarea {
            max-width: 940px;
            width: 80%;
            height: 210px;
            border-radius: 10px;
            border: 1px solid #dbdbdb;
            resize: none;
            padding: 15px;

            &::placeholder {
              font-size: 18px;
              color: #bbbbbb;
              font-family: 'NanumSquareB';
            }
          }
          .textLimit {
            position: absolute;
            bottom: 14px;
            right: 20px;

            font-size: 18px;
            color: #bbbbbb;
          }
        }
      }
      .inquiryBtn {
        text-align: center;
        button {
          background-color: white;
          width: 240px;
          height: 64px;
          border: 1px solid #767676;
          border-radius: 50px;
          font-size: 22px;
          color: #767676;
          cursor: pointer;
        }
      }
    }
  }
  input,
  textarea {
    font-size: 18px;
    font-family: 'NanumSquareB';
  }
`;
