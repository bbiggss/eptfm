import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';

const StyledContour = styled.div`
  .heroArea video {
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

      <div className="centerAlignment">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/1.png`}
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

      <FixedButton />
    </StyledContour>
  );
};

export default Contour;
