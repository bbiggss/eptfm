import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import TextCenter from '../../common/TextCenter';
import ProjectImg from '../../common/ProjectImg';
import ProjectDescription from '../../common/ProjectDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import CustomText from '../../common/CustomText';

const BuildingGreatCityBox = styled.div`
  .PortfolioTitleBox {
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
  }
  .satellite {
    position: absolute;
    right: 0;
    top: -24px;
    margin-right: 170px;
  }
  .mainTexts {
    position: absolute;
    margin-top: 168px;

    .title {
      color: white;
    }
    .subTexts {
      color: white;
    }
  }
  .paddingTopBottom160 {
    padding: 160px 0;
  }

  .customTag {
    background-color: rgba(115, 243, 236, 0.3);
    padding-top: 160px;
    margin-bottom: 160px;
  }
`;

const BuildingGreatCity = () => {
  return (
    <BuildingGreatCityBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'AR'}
        title={'나만의 살기 좋은 도시 만들기'}
      />

      <div className="fullScreen relative">
        <div className="mediumScreen">
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'꿈의 도시를 영차 영차 설계!'}
              description={
                '교통, 주거, 상공업, 환경기초시설, 환경, 의료와 건강, \n사회와 문화 등 다양한 요소를 고려하여 최고의 도시를 \n만들어 보세요. 도시 설계의 마스터가 되어 나만의 \n이상향을 구축해보세요!'
              }
            />
          </div>
        </div>
        <img
          className="satellite"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/main2.png`}
          alt=""
        />
        <img
          className="fullScreen"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/main1.png`}
          alt=""
        />
      </div>
      <TextCenter
        className="paddingTopBottom160"
        text={
          '이 프로젝트는 저희 팀이 여러 도시를 탐방하며, 각 도시의 매력을 분석하고 적용한 결과물이에요. \n도시에 대한 깊은 이해를 바탕으로, 여러분도 자신만의 도시를 설계해보세요.\n도시를 설계하는 과정에서 느끼는 즐거움과 도전의 기쁨을 함께 경험해보세요!'
        }
      />

      <div className="smallScreen">
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`학습자들은 ‘나만의 살기 좋은 도시 만들기’\n콘텐츠를 통해 도시의 계획자이자 건설자로서\n주어진 자원을 활용하여 지속 가능한 도시를 \n만드는 경험을 할 수 있어요!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`도시 설계의 시작, 도시 계획의 첫걸음!\n살기 좋은 도시의 조건은 무엇일까요?`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/2.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`인프라 구축은 도시의 혈관을 만드는 것!\n길이 시원하게 뚫려있는 도시를 계획해 \n볼까요?`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`다양한 주거 지역을 설계할 수 있어요.\n고층 아파트, 단독 주택 등 주거지를 \n학습자 마음대로 배치할 수 있죠!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/4.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`상업 지역은 도시의 심장!\n병원, 영화관, 도서관 등 상업 시설을 배치하고\n경제 활성화를 계획을 세워보세요.`}
          />
        </WidthImgOneTextsOne>
      </div>
      <div className="fullScreen customTag">
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/group1_1.png`}
          />
          <CustomText
            style={{ color: '#292929' }}
            text={
              'AR로 직접 눈앞에서 인프라를 확인할 수 있어요.\n학습자들이 만든 도시를 나의 책상위에 띄워 자세히 관찰할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/group1_2.png`}
          />
          <CustomText
            style={{ color: '#292929' }}
            text={'AR로 미래를 내다보는 도시 설계!\n혁신과 발전, 그 끝없는 가능성을 설계해볼까요?'}
          />
        </WidthOneContent>
      </div>
      <div className="smallScreen">
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/6.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`학습자들은 앞서 배운 살기 좋은 도시의\n요건들을 고민해보며 자신만의 도시를\n설계할 수 있는 기회를 제공받아요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`다양한 인프라와 주거, 상업, 산업 지역의\n중요성을 이해하고, 지속 가능한 발전과 \n친환경 도시 설계의 필요성을 학습해요.`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/7.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/8.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`나만의 살기 좋은 도시를 만드는 신나는\n여정이 기다리고 있어요!\n환경과 경제, 두 마리 토끼를 잡으며\n최고의 도시를 만들어보세요!`}
          />
        </WidthImgOneTextsOne>
      </div>
    </BuildingGreatCityBox>
  );
};

export default BuildingGreatCity;
