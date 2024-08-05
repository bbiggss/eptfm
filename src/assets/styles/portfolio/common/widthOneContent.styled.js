import styled from 'styled-components';

export const WidthOneContent = styled.div`
  position: relative;
  text-align: center;

  @media (min-width: 1025px) {
    padding-top: ${(props) => {
      if (props.$first) return '160px';
      return '0px';
    }};
    padding-bottom: ${(props) => {
      if (props.$last) return '200px';
      if (props.$customPaddingBottom) return '190px';
      return '160px';
    }};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    padding-bottom: ${(props) => {
      if (props.$last) return '112px';
      if (props.$customPaddingBottom) return '116px';
      return '100px';
    }};

    .projectImg {
      width: 100%;
    }
  }

  &.firstChild {
    padding-top: 160px;
  }
  &.lastChild {
    padding-bottom: 200px;
  }
  .left {
    position: absolute;
    left: 0;
    bottom: 510px;
  }
  .left2 {
    position: absolute;
    left: 79px;
    bottom: -135px;
  }
  .left3 {
    position: absolute;
    left: 79px;
    bottom: 88px;
  }
  .right {
    position: absolute;
    right: 0;
    top: -209px;
  }
  .right2 {
    position: absolute;
    right: 0;
    top: 101px;
  }

  .projectImg {
    padding-bottom: 60px;
  }
`;
