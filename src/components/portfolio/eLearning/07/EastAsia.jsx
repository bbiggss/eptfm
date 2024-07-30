import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';
import EqualWidthTwoImages from '../../common/EqualWidthTwoImages';
import ImageTextBlock from '../../common/ImageTextBlock';

const EastAsiaBox = styled.div`
  .heroArea {
    img {
      width: 100%;
    }
    position: relative;
    .PortfolioTitleBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 95px;

      .orgainzation {
        color: #ffffff;
      }
      .fieldTitle {
        color: #ffffff;
      }
    }
  }

  .PortfolioIntroductionBox {
    text-align: center;
    margin-top: 200px;

    .title,
    .subTexts {
      color: #4f4f4f;
    }
  }

  .firstChild {
    padding-top: 200px;
  }
  .customText {
    color: #4f4f4f;
    font-size: 26px;
    line-height: 40px;
  }
  .customText2 {
    margin-top: 60px;
    margin-bottom: 160px;
  }
  .EqualWidthTwoImagesBox {
  }

  .figure_01,
  .figure_02,
  .figure_03,
  .figure_04,
  .figure_05 {
    position: absolute;
    z-index: -1;
  }

  .figure_01 {
    left: 0;
    top: -343px;
  }
  .figure_02 {
    right: 0;
    top: 0;
  }
  .figure_03 {
    left: 0;
    bottom: -96px;
  }
  .figure_04 {
    right: 0;
    bottom: -125px;
  }
  .figure_05 {
    bottom: -158px;
    left: 96px;
  }
`;

const EastAsia = () => {
  return (
    <EastAsiaBox>
      <Breadcrumb style={{ paddingBottom: '58px' }} />

      <div className="fullScreen heroArea">
        <PortfolioTitle
          className="centeredContentWithMarginBottom"
          organization={'동북아역사재단'}
          // field={'VR'}
          title={'동아시아 원격연수'}
        />

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/hero.png`}
          alt=""
        />
      </div>

      <PortfolioIntroduction
        title={'AI 디지털교과서의 새로운 시대가 열립니다!'}
        description={
          '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
        }
      />

      <div className="fullScreen">
        <ImageTextBlock style={{ marginTop: '160px' }}>
          <img
            className="figure_01"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_01.png`}
            alt=""
          />
          <img
            className="figure_02"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_02.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/1.png`}
          />
          <TextCenter
            className="customText"
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </ImageTextBlock>
        <ImageTextBlock>
          <img
            className="figure_03"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_03.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/2.png`}
          />
          <TextCenter
            className="customText"
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </ImageTextBlock>
        <ImageTextBlock>
          <img
            className="figure_04"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_04.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/3.png`}
          />
          <TextCenter
            className="customText"
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </ImageTextBlock>

        <EqualWidthTwoImages
          src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/1.png`}
          src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/2.png`}
          // text="이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다."
        />
        <TextCenter
          className="customText customText2"
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />

        <div className="fullScreen relative">
          <img
            className="figure_05"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_05.png`}
            alt=""
          />
          <EqualWidthTwoImages
            src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/3.png`}
            src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/4.png`}
            // text="이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다."
          />
          <TextCenter
            className="customText customText2"
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </div>
        <EqualWidthTwoImages
          src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/5.png`}
          src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/6.png`}
          // text="이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다."
        />
        <TextCenter
          className="customText customText2"
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />

        <ImageTextBlock style={{ marginBottom: '200px' }}>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/4.png`}
          />
          <TextCenter
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </ImageTextBlock>

        {/* <WidthOneContent className="lastChild">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/4.png`}
          />
          <TextCenter
            text={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </WidthOneContent> */}
      </div>

      <FixedButton />
    </EastAsiaBox>
  );
};

export default EastAsia;
