import styled from 'styled-components';

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  font-family: 'Roboto-Medium';
  justify-content: center;
  z-index: 1;

  & #headerContainer {
    position: relative;
    width: 1556px;
    /* background-color: yellowgreen; */
    margin: 42px 0px;
  }

  & img {
    width: 122px;
    height: 18px;
  }

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
  }
  & ul li {
    margin-right: 92px;
  }
  & ul li:last-child {
    margin-right: 0;
  }
  & span {
    position: absolute;
    right: 0;
  }

  /* 헤더 nav 텍스트 */
  & ul li a {
    text-decoration: none;
    color: #292929;
    font-size: 18px;
    letter-spacing: 0px;
  }

  @media (max-width: 768px) {
    /* 태블릿과 모바일 */
    width: 100%;
    background-color: lightblue;

    & #header ul li {
      margin-right: 10px;
    }
  }

  @media (max-width: 640px) {
    /* 모바일 */
    width: 100%;
    height: 70px;
    background-color: lightgreen;
  }
`;
