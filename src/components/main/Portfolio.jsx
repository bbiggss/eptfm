import React from 'react';
import { PortfolioBox } from '../../assets/styles/main/portfolio.styled';
import PfFieldButton from './PfFieldButton';

const Portfolio = ({ data }) => {
  return (
    <PortfolioBox id="portfolio">
      <div id="container">
        <div id="portfolioTexts">
          <p id="portfolioTitle">PORTFOLIO</p>
          <p id="portfolioText1">
            미래의 학습을 <span>설계하다</span>
          </p>

          {/* pc */}
          <div id="pc_portfolioText2">
            최첨단 교육 공학 <span className="englishFont">SOLUTION</span>으로 <br />
            학습의 한계를 뛰어넘다.
          </div>

          {/* mobile, tablet */}
          <div id="portfolioText2">
            최첨단 교육 공학 <span className="englishFont">SOLUTION</span>으로
            <br /> 학습의 한계를 뛰어넘다.
          </div>
        </div>
        <div id="portfolioLinkImg">
          <div id="portfolioLink">
            <PfFieldButton title={'VR/AR'} link={'portfolio/VrAr'} />
            <PfFieldButton title={'e-Learning'} link={'portfolio/e-Learning'} />
            <PfFieldButton title={'R&D'} link={'portfolio/R&D'} />
          </div>
          <div id="portfolioImgs">
            <div className="pfImgLeftBox">
              <img src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img1.png`} alt="" />
            </div>
            <div className="pfImgRightBox">
              <img src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img2.png`} alt="" />
              <br />
              <img src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img3.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </PortfolioBox>
  );
};

export default Portfolio;
