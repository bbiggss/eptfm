import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import ProjectDescription from '../../common/ProjectDescription';
import Img from '../../common/Img';
import CustomWrapImg from '../../common/CustomWrapImg';

const StyledContour = styled.div`
  .heroArea video {
    width: 100%;
  }

  .introductionArea {
    text-align: center;
    margin-top: 200px;
    margin-bottom: 160px;
  }

  .backImg {
    position: absolute;
    margin-top: 917px;
    width: 100%;
  }
`;

const Contour = () => {
  return (
    <StyledContour>
      <Breadcrumb />

      <div className="fullScreen heroArea">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '380px',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{ color: '#FFFFFF' }}
            field={'AR'}
            title={'땅의 높낮이를 나타내는 등고선'}
          />
        </PortfolioTitleWrap>

        <video
          src={`${process.env.PUBLIC_URL}/assets/videos/contour.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="mainVideo"
        ></video>
      </div>

      <div className="introductionArea">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/contourModel.png`}
          alt=""
        />
        <PortfolioIntroduction
          style={{ marginTop: '60px', marginBottom: '160px' }}
          title={'등고선을 통해 배우는 높낮이의 비밀!'}
          description={
            '높이별 색 구분, 높낮이, 경사를 생생하게 경험하며 등고선의 원리를 이해할 수 있습니다.'
          }
        />
      </div>

      <div className="fullScreen relative">
        <img
          className="backImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/back.png`}
          alt=""
        />
      </div>

      <div className="smallScreen">
        <WidthImgOneTextsOne>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`우리팀은 실제 산의 등고선을 정밀하게 반영하기\n 위해 다양한 지형 데이터를 분석했어요.\n지형 데이터를 다루다 보니, 우리팀도\n산 전문가가 다 되었답니다!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`학습자는 평면 지도에 선을 긋는 간단한 \n작업으로 등고선의 개념을 배울 수 있어요.\n등고선의 신비한 세계를 같이 시작해볼까요?`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/2.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`평면 지도로 등고선의 개념을 익힌 후,\n증강현실(AR) 기술을 활용하여 등고선을\n자세히 살펴볼 수 있어요!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`학습자는 높이에 맞춰 등고선 색을 넣어 지형의\n 높낮이를 직관적으로 이해할 수 있어요.\n낮으면 낮을 수록 어떤 색을 칠해야 할까요?`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/4.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`버튼 하나로 눈앞에 펼쳐지는 그래프!\n실제 산의 모습을 반영한 그래프와 함께\n학습자는 등고선이 지형을 어떻게 나타내는지\n명확하게 이해할 수 있어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <ProjectDescription
            text={`마지막으로, 재미있는 문제 풀이 시간!\n계곡과 능선, 고점과 저점, 완만함과 가파름을\n분별하는 여섯가지 문제를 통해 학습을\n복습하고 확인할 수 있어요!`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/6.png`}
          />
        </WidthImgOneTextsOne>
      </div>

      <CustomWrapImg
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/contourMap.png`}
      />
    </StyledContour>
  );
};

export default Contour;
