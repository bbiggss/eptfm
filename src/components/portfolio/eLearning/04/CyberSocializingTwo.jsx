import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import ProjectDescription from '../../common/ProjectDescription';
import ProjectImg from '../../common/ProjectImg';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledCyberSocializingTwo } from '../../../../assets/styles/portfolio/eLearning/04_CyberSocializingTwo/StyledCyberSocializingTwo';

const CyberSocializingTwo = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledCyberSocializingTwo>
      <Breadcrumb />

      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        // field={'VR'}
        title={'사이버어울림(영어, 체육)'}
      />

      <div className="fullScreen heroArea">
        <PortfolioIntroduction
          title={'영어와 체육 교과 연계, 사이좋게 지내요!'}
          description={'사이버 폭력 예방을 위해 영어와 체육 교과와 \n연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'}
        />
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/hero.png`} alt="" />
      </div>

      <div className="smallScreen">
        <WidthImgOneTextsOne pcPaddingTop="200px">
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/1.png`} />
          <ProjectDescription
            textPosition={'right'}
            text={`이 콘텐츠는 영어 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방 하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`}
          />
          <img
            className="book"
            // src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/1.png`}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/book.png`}
            alt=""
          />
          <img
            className="cloud"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/cloud.png`}
            alt=""
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`채팅 매너, 댓글 작성 시 주의사항 등을\n배우며, 존중과 배려를 바탕으로 한 소통의\n중요성에 대해 학습할 수 있어요.`}
          />
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/2.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/3.png`} />
          <ProjectDescription textPosition={'right'} text={`말이 사람들에게 미치는 긍정적, 부정적\n영향을 사례를 통해 알아볼 수 있어요.`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`정리하기를 통해 학습한 내용을 한번 더 \n복습하며, 건강한 사이버 환경의 중요성에\n대해 한번 더 재고할 수 있답니다!`}
          />
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/5.png`} />
          <ProjectDescription
            textPosition={'right'}
            text={`이 콘텐츠는 체육 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방 하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`}
          />
          <img
            className="books"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/books.png`}
            alt=""
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription text={`다양한 시뮬레이션과 롤플레잉 상황을 통해\n학습자들이 직접 상황을 체험하고\n대처방법을 연습할 수 있어요.`} />
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/6.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/7.png`} />
          <ProjectDescription
            textPosition={'right'}
            text={`다양한 교육 전문가분들과 협력하여\n제작되었어요. 실감 나는 시나리오와 \n사례가 콘텐츠에 포함되었답니다!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <img
            className="cloudPaperPlane"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/cloudPaperPlane.png`}
            alt=""
          />
          <ProjectDescription text={`이 콘텐츠를 통해 학습자들은 건강한\n사이버 생활을 영위할 수 있는 능력을\n가질 수 있답니다!`} />
          <ProjectImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/8.png`} />
        </WidthImgOneTextsOne>
      </div>
    </StyledCyberSocializingTwo>
  );
};

export default CyberSocializingTwo;
