import styled from 'styled-components';

export const Zigzag = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    /* background-color: yellow; */
    text-align: center;
    padding-bottom: 200px;
    .left + .right {
      margin-left: 60px;
    }
    .right {
      position: relative;
      margin-top: 130px;
      .sideImg1 {
        top: -453px;
        right: -173px;
        position: absolute;
      }
    }
  }
  @media (max-width: 1024px) {
    margin: 0 var(--mobile-margin);
    display: flex;
    flex-wrap: wrap;
    img {
      width: 100%;
    }
  }
`;
