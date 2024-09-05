import React from 'react';
import { StyledMainPortfolio } from '../../assets/styles/main/portfolio.styled';
import PfFieldButton from './PfFieldButton';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';

const Portfolio = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledMainPortfolio id="portfolio">
      <div id="portfolioImgs">
        <img
          className="dinosaur"
          src={`${process.env.PUBLIC_URL}/assets/images/main/${isMobileTablet ? 'dinosaur_m' : 'portfolio_img1'}.png`}
          alt=""
        />
        <div className="pfImgRightBox">
          <img className="widthTablet" src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img2.png`} alt="" />
          <br />
          <img className="heightTablet" src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img3.png`} alt="" />
        </div>
      </div>
      <div className="marginWrapper">
        <div id="portfolioTexts">
          <p id="portfolioTitle">PORTFOLIO</p>
          <p id="portfolioText1">
            미래의 학습을 <span>설계하다</span>
          </p>

          <div id="portfolioText2">
            최첨단 교육 공학 <span className="englishFont">SOLUTION</span>으로
            <br /> 학습의 한계를 뛰어넘다.
          </div>
        </div>

        <div id="portfolioLinkImg">
          <PfFieldButton title={'VR/AR'} link={'portfolio/VrAr'} />
          <PfFieldButton title={'e-Learning'} link={'portfolio/e-Learning'} />
          <PfFieldButton title={'R&D'} link={'portfolio/R&D'} />
        </div>
      </div>
    </StyledMainPortfolio>
  );
};

export default Portfolio;
