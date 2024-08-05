import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import ProjectDescription from '../../common/ProjectDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import TextCenter from '../../common/TextCenter';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import Img from '../../common/Img';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';

const ReservoirDamBox = styled.div`
  .heroArea {
    position: relative;
    img {
      width: 100%;
    }

    .PortfolioIntroductionBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    .subTexts {
      color: rgba(41, 41, 41, 0.8);
    }
  }

  .background90ebff {
    background-color: rgba(144, 235, 255, 0.3);

    .textCenter {
      padding-top: 60px;
      color: #040404;
    }
  }

  @media (min-width: 1025px) {
    .heroArea {
      .PortfolioIntroductionBox {
        margin-top: 112px;
      }

      .background {
        position: absolute;
        margin-top: 160px;
        width: 100%;
        z-index: -1;
        img {
          width: 1384px;
          height: 998px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .PortfolioIntroductionBox {
      margin-top: 50px;
      .title {
        font-size: 30px;
      }
      .subTexts {
        margin-top: 20px;
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
  @media (max-width: 767px) {
    .PortfolioIntroductionBox {
      margin-top: 20px;
      .title {
        font-size: 20px;
      }
      .subTexts {
        margin-top: 10px;
        font-size: 12px;
        line-height: 10px;
      }
    }
  }
`;

const ReservoirDam = () => {
  return (
    <ReservoirDamBox>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ marginBottom: '80px', display: 'flex', justifyContent: 'center' }}
      >
        <PortfolioOrganization
          style={{ color: '#999999', fontFamily: 'NanumSquareB' }}
          organization={'농식품공무원교육원'}
        />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', whiteSpace: 'nowrap' }}
          title={'저수지·댐 안전관리 및 재해예방'}
        />
      </PortfolioTitleWrap>

      <div className="fullScreen heroArea">
        <PortfolioIntroduction
          title={'물의 힘을 안전하게!'}
          description={
            '저수지·댐의 구조와 기능을 이해하고, 안전 관리와 재해 예방을 위한 지식을 습득하세요!\n실제 사례와 함께 배우며, 안전한 댐 관리를 이해할 수 있어요.'
          }
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/hero.png`}
          alt=""
        />
        <div className="background">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/background.png`}
            alt=""
          />
        </div>
      </div>

      <div className="smallScreen">
        <WidthImgOneTextsOne pcPaddingTop="200px" pcPaddingBottom="160px">
          <ProjectDescription
            text={`우리 팀은 저수지·댐 안전관리 및 재해예방 \ne-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 \n전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/1.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/2.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectDescription
            text={`저수지·댐의 구조와 기능에 대한 기본적인 이해를\n바탕으로, 수자원 관리와 재해 예방의 중요성을\n인식할 수 있어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/3.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/4.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`댐 붕괴나 유출 사고와 같은 비상 상황에서의 대처 \n방법을 익히고, 비상 대응 계획 수립과 주민 대피 절차를\n 학습할 수 있어요.`}
          />
        </WidthImgOneTextsOne>
      </div>

      <div className="fullScreen background90ebff">
        <WidthOneContent $first>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/1.png`}
          />
          <TextCenter
            text={
              '저수지 댐의 각 구성 요소와 기능을 이해하기 위해 직접 이미지를 디자인 했어요!\n학습자들은 그려진 이미지를 통해 저수지 댐의 구조와 기능을 \n보다 명확히 이해하고 기억할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/2.png`}
          />
          <TextCenter
            text={
              '학습 중간마다 Q&A 섹션이 있어 학습자들이 궁금한 점을 해소할 수 있어요.\n학습의 흐름을 방해하지 않으면서도 효과적인 학습이 가능하답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/3.png`}
          />
          <TextCenter
            text={
              '퀴즈를 통해 학습 내용을 점검할 수 있어요.\n학습자는 자신이 얼마나 이해했는지 확인하고, 부족한 부분을 보완할 수 있어요.\n학습 내용을 체계적으로 정리해볼까요?'
            }
          />
        </WidthOneContent>
      </div>

      <div className="smallScreen">
        <WidthImgOneTextsOne pcPaddingTop="160px" pcPaddingBottom="160px">
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`적절한 이미지와 한눈에 보이는 텍스트 구성으로\n학습자의 이해를 최선으로 고려하여 화면 디자인을 \n구성해요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectDescription
            text={`다양한 내용을 인포그래픽화하기 위해 전문가들의\n많은 피드백을 반영하여 최적의 학습 경험을 제공할 수\n있도록 노력한답니다!`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/6.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/7.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`저수지 댐의 구조를 설명할 때는 각 구성 요소를 \n시각적으로 보여주는 다이어그램 및 이미지를 제공하여\n학습자가 쉽게 구조를 파악할 수 있게 해요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <ProjectDescription
            text={`다양한 학습 내용의 구성을 통해 지루함을 방지해요!\n저수지 댐의 구조와 기능부터 안전 관리와 재해 \n예방까지, 인터랙티브한 e-Learning으로 배워보세요!`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/8.png`}
          />
        </WidthImgOneTextsOne>
      </div>
    </ReservoirDamBox>
  );
};

export default ReservoirDam;
