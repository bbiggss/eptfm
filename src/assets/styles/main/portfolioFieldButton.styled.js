import styled from 'styled-components';

const pfFieldMobileWidth = 'clamp(315px, 84.00vw, 400px)';

export const StyledFieldMoveButton = styled.div`
  /* 영어폰트 */
  .pfFieldTag {
    position: relative;
    font-family: 'Roboto-Medium';
  }
  @media (min-width: 1025px) {
    width: clamp(0px, 19.79vw, 380px);
    /* 150-16 */
    .pfFieldTag {
      height: var(--pc-90px);
      line-height: var(--pc-90px);

      margin-bottom: 24px;
      display: block;
      border: 1px solid #767676;
      border-radius: 999px;
      text-align: center;

      color: #767676;
      font-size: clamp(0px, 1.35vw, 26px);
    }
    a {
      display: block;
      text-decoration: none;
    }

    .arrow {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);

      width: clamp(0px, 0.47vw, 9px); /* Adjust the size as needed */
      height: clamp(0px, 0.94vw, 18px); /* Adjust the size as needed */
      background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
    :hover {
      background-color: #48c2c5;
      border-radius: 999px;
      .pfFieldTag {
        color: #ffffff;
        border-color: transparent;
      }
      .arrow {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);

        width: clamp(0px, 0.47vw, 9px); /* Adjust the size as needed */
        height: clamp(0px, 0.94vw, 18px); /* Adjust the size as needed */
        background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow_white.png);
        background-size: cover;
      }
    }
  }
  @media (max-width: 1024px) {
    /* 150-16 */
    .pfFieldTag {
      /* height: var(--mobile-60px); */
      /* line-height: var(--mobile-60px); */
      padding: 15px 0;

      /* margin-bottom: 16px; */
      margin-bottom: 4.2vw;
      display: block;
      width: ${pfFieldMobileWidth};
      border: 1px solid #767676;
      border-radius: 999px;
      text-align: center;

      color: #767676;
      font-size: clamp(18px, 3.8vw, 100px);
    }
    a {
      display: block;
      width: ${pfFieldMobileWidth};
      text-decoration: none;
    }
    .arrow {
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);

      width: 8px; /* Adjust the size as needed */
      height: 16px; /* Adjust the size as needed */
      background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
    :hover {
      background-color: #48c2c5;
      border-radius: 999px;
      .pfFieldTag {
        color: #ffffff;
        border-color: transparent;
      }
      .arrow {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);

        width: 8px; /* Adjust the size as needed */
        height: 16px; /* Adjust the size as needed */
        background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_arrow_white.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`;
