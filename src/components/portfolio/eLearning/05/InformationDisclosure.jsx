import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import styled from 'styled-components';
import ProjectImg from '../../common/ProjectImg';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import TextCenter from '../../common/TextCenter';
import ProjectDescription from '../../common/ProjectDescription';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';

const InformationDisclosureBox = styled.div`
  .area1 {
    .backImg {
      position: absolute;
    }
    .mainImg {
      margin-top: 79px;
    }

    .PortfolioTitleBox {
      position: absolute;
      margin-left: 148px;
      margin-top: 130px;

      .orgainzation {
        color: #292929;
      }
    }

    .PortfolioIntroductionBox {
      margin-top: 100px;
      text-align: center;
    }
  }

  .area2 {
    .WidthOneContent {
      margin-top: 100px;
    }
  }
`;

const InformationDisclosure = () => {
  return (
    <InformationDisclosureBox>
      <Breadcrumb style={{ paddingBottom: '31px' }} />

      <div className="largeScreen area1">
        <ProjectImg
          className="backImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/main2.png`}
        />
        <PortfolioTitle
          organization={'한국교육학술정보원'}
          field={''}
          title={'정보공시 입력 지침안내와\n 시스템 메뉴얼'}
        />
        <ProjectImg
          className="mainImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/main1.png`}
        />

        <PortfolioIntroduction
          title={'정보공시로 투명한 학교 운영을 알아보세요!'}
          description={
            '학교의 다양한 정보를 쉽게 이해하고 분석하는 방법을 익히며,\n학생, 학부모, 교사가 함께 투명하고 효율적인 학교 윤영에 참여할 수 있도록 돕는 콘텐츠에요.'
          }
        />
      </div>

      <div className="smallScreen area2">
        <WidthOneContent className="WidthOneContent">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group1_1.png`}
          />
          <TextCenter
            text={
              '이 콘텐츠는 정보공시의 정의와 필요성에 대해 설명해요.\n정보공시는 학교의 투명성과 신뢰성을 높이고, 교육의 질을 향상시키는 데 중요한 역할을 해요!'
            }
          />
        </WidthOneContent>

        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`우리 팀은 인터랙티브 모듈을 통해\n학습자가 정보공시의 사례화 효과를\n 시각적으로 학습할 수 있도록 콘텐츠를\n제작하려 많은 노력을 기울였어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`학교의 조직 구조, 교직원 현황,  학급 편성,\n주요 교육 활동 등 학교 운영에 관한\n정보를 공개한답니다!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_2.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`가상의 학교 운영 데이터를 분석하고,\n이를 바탕으로 학교 운영의 투명성을\n확인하는 활동을 진행할 수 있어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`뿐만 아니라 학교의 전반적인 운영 상황,\n교육 성과, 학생의 학업 성취도 등을\n투명하게 공개하고, 이를 통해 교육의\n질을 높이는 데 목적을 두고 있음을\n뚜렷하게 확인할 수 있답니다!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_4.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`뿐만 아니라 학교의 전반적인 운영 상황,\n교육 성과, 학생의 학업 성취도 등을\n투명하게 공개하고, 이를 통해 교육의\n질을 높이는 데 목적을 두고 있음을\n뚜렷하게 확인할 수 있답니다!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`다양한 학생 지원 프로그램의 효과를\n분석하고, 이를 통해 학생 복지 향상 방안을\n모색할 수 있어요.`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_6.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_7.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`학부모와 지역사회의 참여와 협력의\n중요성에 대해도 알 수 있어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <ProjectDescription
            text={`다양한 학생 지원 프로그램의 효과를\n분석하고, 이를 통해 학생 복지 향상 방안을\n모색할 수 있어요!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_8.png`}
          />
        </WidthImgOneTextsOne>
      </div>
    </InformationDisclosureBox>
  );
};

export default InformationDisclosure;
