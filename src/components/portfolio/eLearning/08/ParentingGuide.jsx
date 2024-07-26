import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';

const ParentingGuideBox = styled.div``;

const ParentingGuide = () => {
  return (
    <ParentingGuideBox>
      <Breadcrumb />

      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        // field={'VR'}
        title={'교사가 이끄는 교실혁명'}
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/main.png`}
        alt=""
      />

      <FixedButton />
    </ParentingGuideBox>
  );
};

export default ParentingGuide;
