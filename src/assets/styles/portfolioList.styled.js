import styled from 'styled-components';

export const PortfolioListBox = styled.div`
  h1,
  #fieldTitle {
    text-align: center;
  }

  ul {
    display: grid;
    justify-content: center;
    /* grid-template-columns: auto auto auto; */
    grid-template-columns: repeat(3, 400px);
    gap: 50px 50px;
    /* 앞: 상하간격 뒤: 좌우간격 */
    padding: 0;
  }

  ul li {
    list-style: none;
    width: 400px;
    height: 382px;
    /* background-color: yellow; */
    overflow: hidden; //추후수정

    & a {
      text-decoration: none;
    }

    & div:first-child {
      width: 100px;
      height: 267px;
    }
    & div:first-child img {
      height: 100%;
    }
    & div:last-child {
      width: 100%;
      height: 100px;
      font-weight: bold;
      margin-left: 30px;

      & p:first-child {
        font-size: 15px;
        color: gray;
      }
      & p:last-child {
        font-size: 20px;
        color: black;
      }
    }
  }
`;
