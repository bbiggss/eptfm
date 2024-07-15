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

    div {
      max-width: 1140px;
      width: 80%;
      height: 572px;
      /* background-color: beige; */
      span {
        font-size: 32px;
        color: #292929;
      }
      img {
        float: right;
        cursor: pointer;
      }
      hr {
        margin: 40px 0;
      }
    }
  }
`;
