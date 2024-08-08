import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';
import EqualWidthTwoImages from '../../common/EqualWidthTwoImages';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';

const StyledClassroomRevolutionLessonPlans = styled.div`
  .twoImgWrapper {
    margin-bottom: 160px;
  }
  .introductionArea {
    position: relative;
    height: 364px;
    margin-top: 160px;
    margin-bottom: 35px;
    span {
      color: #292929;
      font-size: 90px;
      letter-spacing: -0.02em;
      font-family: 'NanumSquareEB';
      position: absolute;
      margin-top: 197px;
    }
    .leftSpan {
      margin-left: 378px;
      /* background-color: yellow; */
    }
    .rightSpan {
      right: 0;
      margin-right: 370px;
    }
    .robotImg1 {
      position: absolute;
      margin-left: 700px;
    }
  }

  .introductionArea2 {
    margin-top: 160px;
    margin-bottom: 160px;
    display: flex;
    position: relative;

    .ai {
      margin-right: 100px;
    }

    .book {
      position: absolute;
      left: 396px;
      top: 228px;
    }
    .robot2 {
      position: absolute;
      right: -39px;
      top: -50px;
    }
  }

  .twoImgWrapper img {
    border: 1px solid #ededed;
    border-radius: 30px;
  }
`;

const ClassroomRevolutionLessonPlans = () => {
  return (
    <StyledClassroomRevolutionLessonPlans>
      <Breadcrumb />

      <div className="fullScreen">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            marginLeft: '330px',
            marginTop: '440px',
          }}
        >
          <PortfolioOrganization
            style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }}
            organization={'한국교육학술정보원'}
          />
          <PortfolioFieldTitle
            style={{ color: '#FFFFFF', whiteSpace: 'nowrap' }}
            title={'교실혁명 강의교안'}
          />
        </PortfolioTitleWrap>

        <HeroImg
          pcHeight={'1000px'}
          tabletHeight={''}
          mobileHeight={''}
          // isLoaded={isLoaded}
          // setIsLoaded={setIsLoaded}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/hero.png`}
        />
      </div>
      <div className="fullScreen introductionArea">
        <img
          className="robotImg1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/1.png`}
          alt=""
        />
        <span className="leftSpan">AI가 이끄는</span>
        <span className="rightSpan">새로운 학습 시대</span>
      </div>

      <TextCenter
        className="customText customText2"
        text={
          "우리 팀은 '교사가 이끄는 교실혁명'이라는 주제의 강의교안을 개발하였습니다. 이 강의교안은\nAI 기술을 활용하여 학생들에게 맞춤형 교육을 제공하며, 교사들이 더욱 효과적으로 가르칠 수 있도록 지원합니다."
        }
      />

      <div className="smallScreen introductionArea2">
        <img
          className="ai"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/2_1.png`}
          alt=""
        />
        <img
          className="book"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/2_2.png`}
          alt=""
        />
        <img
          className="robot2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/3.png`}
          alt=""
        />
        <CustomText
          text={
            '이 강의교안을 만들기 위해 우리 팀은 AI 알고리즘을 통해 \n수많은 학습 데이터를 분석하고, 이를 바탕으로 최적화된 \n학습 경로를 제시하는 데 많은 시간을 투자했습니다. \n\n우리의 목표는 학생들이 단순히 지식을 습득하는 것을 \n넘어서, 문제 해결과 창의적 사고를 촉진하는 데에 있습니다.'
          }
        />
      </div>
      <div className="smallScreen">
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group1/1.png`}
          />
          <TextCenter
            text={
              '이론적 내용을 학습한 후, 교사들이 직접 수업 계획을 세우고 실습해볼 수 있는 기회를 제공해요.\n피드백을 통해 개선할 점을 발견하고 성장할 수 있도록 돕는답니다!'
            }
          />
        </WidthOneContent>

        <div className="twoImgWrapper">
          <EqualWidthTwoImages
            style={{ marginBottom: '60px' }}
            $edit
            src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_1.png`}
            src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_2.png`}
          />
          <TextCenter
            className="customText customText2"
            text={
              '교사들이 즉시 사용할 수 있는 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지, 평가 루브릭 등을 포함해요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <EqualWidthTwoImages
            style={{ marginBottom: '60px' }}
            $edit
            src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_3.png`}
            src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_4.png`}
          />
          <TextCenter
            className="customText customText2"
            text={
              '교사들이 즉시 사용할 수 있는 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지, 평가 루브릭 등을 포함해요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <EqualWidthTwoImages
            style={{ marginBottom: '60px' }}
            $edit
            src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_5.png`}
            src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_6.png`}
          />
          <TextCenter
            className="customText customText2"
            text={
              '교육 전문가와 현직 교사들의 협력으로 개발 된 콘텐츠!\n다양한 교사들의 의견을 수렴하고, 교실 현장의 실제 필요와 어려움을 반영하려 노력했어요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <EqualWidthTwoImages
            style={{ marginBottom: '60px' }}
            $edit
            src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_7.png`}
            src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_8.png`}
          />
          <TextCenter
            className="customText customText2"
            text={
              '‘교사가 이끄는 교실혁명 강의교안’은 교사들이 미래 교육의 주역으로서 \n자신의 교육 철학을 재검토하고 새로운 도전에 대비하는 기회를 제공한답니다!'
            }
          />
        </div>
      </div>
    </StyledClassroomRevolutionLessonPlans>
  );
};

export default ClassroomRevolutionLessonPlans;
