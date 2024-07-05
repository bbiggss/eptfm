import styled from 'styled-components';

export const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  /* background-size: cover; */

  font-family: 'Roboto-Medium';

  & #header {
    width: 1556px;
    height: 100px;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  & #header img {
    width: 122px;
    height: 18px;
  }

  & #header ul {
    display: flex;
    list-style: none;
  }
  & #header ul li {
    margin-right: 92px;
  }
  & #header span {
    position: absolute;
    right: 0;
  }

  & #header ul a {
    text-decoration: none;
    color: #292929;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0px;
  }

  @media (max-width: 768px) {
    /* 태블릿과 모바일 */
    width: 100%;
    /* background-color: lightblue; */

    & #header ul li {
      margin-right: 10px;
    }
  }

  @media (max-width: 480px) {
    /* 모바일 */
    width: 100%;
    height: 70px;
    /* background-color: lightgreen; */
  }

  & #title {
    color: green;
  }
`;

// export const HeaderBottomBox = styled.div`
//   height: calc(100vh - 100px);
// `;
