import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';

const ClassroomRevolutionBox = styled.div`
  .relative {
    height: 619px;
  }
  .ellipse {
    width: 687px;
    height: 619px;
    position: relative;
    /* overflow: hidden; */
  }
  .container {
    position: absolute;
    width: 1400px;
    height: 1400px;

    background-image: radial-gradient(circle, #50dfff, #68e9f9, #9effec);
    filter: blur(10px); /* 블러 효과 */
    border-radius: 50%; /* 원형 또는 타원형으로 설정 */
    opacity: 0.5;
    /* top: -50%;
    left: -50%; */
  }

  .heroArea {
    width: 100%;
    height: 1124px;
    background-color: yellow;
  }

  .area2 {
    height: 1120px;
    background-color: #30bbc7;
  }
`;

const ClassroomRevolution = () => {
  return (
    <ClassroomRevolutionBox>
      <div className="fullScreen heroArea">
        <div className="ellipse">
          <div className="container"></div>
        </div>
        <Breadcrumb />

        <PortfolioTitle
          className="centeredContentWithMarginBottom"
          organization={'한국교육학술정보원'}
          title={'교사가 이끄는 교실혁명'}
        />
      </div>
      <div className="fullScreen area2"></div>

      {/* <img
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01/hero.png`}
        alt=""
      /> */}

      <FixedButton />
    </ClassroomRevolutionBox>
  );
};

export default ClassroomRevolution;
