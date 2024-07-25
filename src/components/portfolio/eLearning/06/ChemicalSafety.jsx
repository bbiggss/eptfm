import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';

const ChemicalSafetyBox = styled.div`
  .BreadcrumbBox {
    padding-bottom: 47px;
  }
  .heroArea {
    position: relative;
    img {
      width: 100%;
    }

    .PortfolioTitleBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 230px;
    }
    .PortfolioIntroductionBox {
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      margin-bottom: 230px;
      width: max-content;

      .title,
      .subTexts {
        color: #ffffff;
      }
    }
  }
  .side1,
  .side2 {
    position: absolute;
    z-index: -1;
  }
  .side1 {
    left: 0;
    top: -431px;
  }
  .side2 {
    right: 0;
    margin-right: 78px;
    top: -168px;
  }

  .group2Area {
    background-color: rgba(131, 148, 188, 0.3);

    .nationFlag {
      width: 610px;
      padding-top: 160px;
      padding-bottom: 100px;

      display: grid;
      grid-template-columns: repeat(5, auto);
      gap: 0 20px;

      margin: 0 auto;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 60px 60px;
    }

    .customPadding {
      color: #292929;
      font-size: 26px;
      padding-top: 60px;
      padding-bottom: 160px;
      line-height: 40px;
    }
  }

  .firstChild {
    padding-top: 200px;
  }
  .firstChild2 {
    padding-top: 160px;
  }

  .footer {
    width: 100%;
  }
`;

const ChemicalSafety = () => {
  return (
    <ChemicalSafetyBox>
      <Breadcrumb />
      <div className="fullScreen heroArea">
        <PortfolioTitle
          className="centeredContentWithMarginBottom"
          organization={'화학물질안전원'}
          title={'화학물질안전에 대하여'}
        />
        <PortfolioIntroduction
          title={
            '화학물질의 특성과 위험성, 안전한 사용방법을 학습하며\n실질적인 안전 관리 지식을 쌓아보세요!'
          }
          description={
            '이 콘텐츠는 화학물질의 특성과 위험성, \n안전한 사용 방법을 학습할 수 있도록 설계되었어요.'
          }
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/hero.png`}
          alt=""
        />
      </div>

      <div className="fullScreen">
        <WidthOneContent className="firstChild">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group1/1.png`}
          />
          <TextCenter
            text={
              '우리팀은 학습자가 산업 현장에서나 일상생활에서 화학물질을\n안전하게 다룰 수 있는 지식과 기술을 이해하고\n사고 예방과 안전 관리를 위한 실질적인 정보를 습득할 수 있도록 설계했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group1/2.png`}
          />
          <TextCenter
            text={
              '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을 풍부하게 사용했어요.\n화학물질의 위험성 표기를 설명할 때는 아이콘으로 시각적으로 보여주고,\n응급처치 방법을 설명할 때는 단계별로 사진과 일러스트를 활용했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent className="relative">
          <img
            className="side1"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/side/side1.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group1/3.png`}
          />
          <TextCenter
            text={
              '학습 내용은 다양한 형태로 구성되어 학습자의 지루함을 줄여줘요.\n텍스트 설명 외에도 사진, 애니메이션, 인터랙티브 시뮬레이션 등을 포함하여\n학습자가 몰입할 수 있는 환경을 제공해요.'
            }
          />
        </WidthOneContent>
      </div>

      <div className="fullScreen group2Area">
        <div className="nationFlag">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/korea.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/nepal.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/vietnam.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/indonesia.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/cambodia.png`}
          />
        </div>

        <div className="smallScreen grid">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/1.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/2.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/3.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group2/4.png`}
          />
        </div>
        <TextCenter
          className="customPadding"
          text={
            '한국어 뿐만 아니라 캄보디아어, 네팔어, 인도네시아어로도 학습할 수 있어요.\n우리 팀은 다양한 언어를 사용하는 학습자들이 언어의 장벽 없이\n화학물질 안전 지식을 습득할 수 있도록 지원하기 위해 노력한답니다!'
          }
        />
      </div>

      <div className="fullScreen">
        <WidthOneContent className="firstChild2">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group1/4.png`}
          />
          <TextCenter
            text={
              '위험성 분류와 표기법, 응급처치 방법 등의 실용적인 내용은\n현장에서 바로 적용할 수 있도록 구체적으로 설명하고,\n시청각 자료를 풍부하게 활용하여 이해를 도울 수 있도록 설계했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent className="lastChild">
          <img
            className="side2"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/side/side2.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/group1/5.png`}
          />
          <TextCenter
            text={
              '‘화학물질 안전’ 콘텐츠는 단순한 교육을 넘어, 안전한 미래를 만들어 가는 첫걸음이에요.\n이 콘텐츠를 통해 자신의 주변과 산업 현장에서의 안전을 지켜볼까요?'
            }
          />
        </WidthOneContent>
        <ProjectImg
          className="footer"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06/footer.png`}
        />
      </div>

      <FixedButton />
    </ChemicalSafetyBox>
  );
};

export default ChemicalSafety;
