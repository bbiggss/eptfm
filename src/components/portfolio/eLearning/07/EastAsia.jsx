import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
// import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
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
    top: -520px;
  }
  .figure_02 {
    right: 0;
    top: -217px;
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

  .projectImg {
    margin-bottom: 60px;
  }
`;

const EastAsia = () => {
  return (
    <EastAsiaBox>
      <Breadcrumb />

      <div className="fullScreen heroArea">
        <PortfolioTitle
          className="centeredContentWithMarginBottom"
          organization={'동북아역사재단'}
          // field={'VR'}
          title={'처음 만나는 동아시아사'}
        />

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/hero.png`}
          alt=""
        />
      </div>

      <PortfolioIntroduction
        title={'과거로의 여행에서 배운 역사, 동아시아의 문화를 살펴봐요!'}
        description={
          '한국, 중국, 일본의 역사를 통해 동아시아 지역의 문화와\n상호작용을 탐구하여 깊이 있는 역사적 이해를 도모해볼까요?'
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
              '학습자는 동아시아 원격연수를 통해 동아시아 지역의 역사적 흐름과 \n상호작용을 이해할 수 있어요. '
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
              '동아시아의 나라들이 어떻게 상호 영향을 주고받으며 발전해왔는지 탐구해볼까요?\n동아시아의 고대 문명 부터 현대에 이르기까지의 주요 사건과 문화적 교류\n그리고 경제적 변화 등을 포괄적으로 확인해보세요!'
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
              '각국의 초기 역사와 문명 형성, 주요 왕조와 그들의 업적, 문화와 사상\n그리고 제국주의와 서양 열강의 진출, 동아시아 각국의 근대화 과정을 살펴볼 수 있어요.'
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
            '동아시아의 주요 역사적 사건과 인물을 다룬 강의와 애니메이션을 통해\n시청각적으로 학습할 수 있어요.'
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
              '고대 문헌, 지도, 유물 사진 등 다양한 디지털 자료를 활용하여\n구체적인 역사적 사실과 맥락을 시각적으로 이해할 수 있답니다!'
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
            '각 테마별로 퀴즈와 과제를 통해 학습 내용을 복습하고\n학습자 스스로의 이해도를 점검할 수 있어요.'
          }
        />

        <ImageTextBlock style={{ marginBottom: '200px' }}>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/4.png`}
          />
          <TextCenter
            text={
              '‘동아시아 원격연수’ 콘텐츠를 통해 동아시아의 역사를 깊이 이해하고\n현재와 미래의 동아시아 관계를 고찰하는 능력을 함양해보아요!'
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
    </EastAsiaBox>
  );
};

export default EastAsia;
