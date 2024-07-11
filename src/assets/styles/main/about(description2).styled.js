export const AboutDescriptionBox2 = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    width: 50%;
    max-width: 960px;
    /* background-color: yellow; */

    & img {
      width: 247px;
      height: 286px;
      position: absolute;
      right: 0;
      /* margin-right: 186px; */
      margin-right: 213px;
      margin-top: -35px;
    }
    & #textsBoxContainer {
      margin-top: 206px;
      margin-left: 182px;
      /* background-color: aqua; */

      & .textsSubTitle {
        font-family: 'NanumSquareEB';
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
      }
      & .textsContents {
        font-family: 'NanumSquareB';
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    #textsBoxContainer {
      padding-left: 32px;

      & .textsSubTitle {
        color: #48c2c5;
        font-size: 16px;
        line-height: 19.36px;
        margin: 0;
      }
      & .textsContents {
        margin: 0;
        font-size: 12px;
        line-height: 14.52px;
      }
    }
  }
  @media (max-width: 767px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    #textsBoxContainer {
      padding-left: 32px;

      & .textsSubTitle {
        color: #48c2c5;
        font-size: 16px;
        line-height: 19.36px;
        margin: 0;
      }
      & .textsContents {
        margin: 0;
        font-size: 12px;
        line-height: 14.52px;
      }
    }
  }
`;
