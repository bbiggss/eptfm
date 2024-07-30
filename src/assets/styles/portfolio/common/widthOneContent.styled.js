import styled from 'styled-components';

export const WidthOneContent = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 160px;
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
