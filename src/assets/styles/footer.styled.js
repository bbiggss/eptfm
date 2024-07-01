import styled from 'styled-components';

export const FooterBox = styled.div`
  width: 100%;
  background-color: #f0f2f4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  color: #767676;

  @font-face {
    font-family: 'NanumSquareB';
    font-weight: normal;
    src: url('../fonts/NanumSquareB.otf') format('opentype');
  }
  font-family: 'NanumSquareB';

  & #container {
    width: 80%;
    /* background-color: beige; */
    display: flex;
  }
  & #container #info {
    /* background-color: li; */
  }
  & #container #inquiry {
    margin-left: auto;
    display: flex;
    align-items: center;
    text-align: right;
  }
  & img {
    width: 150px;
    margin-bottom: 20px;
  }
`;
