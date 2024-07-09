import React from 'react';
import { PortfolioBox } from '../../assets/styles/main.styled';

import PfFieldButton from './PfFieldButton';

const Portfolio = ({ data }) => {
  return (
    <PortfolioBox id="portfolio">
      <div id="container">
        <div id="portfolioTexts">
          <p id="portfolioTitle">PORTFOLIO</p>
          <p id="portfolioText1">
            미래의 학습을 <b>설계하다</b>
          </p>
          <div id="portfolioText2">
            최첨단 교육 공학 <span className="englishFont">SOLUTION</span>으로 <br />
            학습의 한계를 뛰어넘다.
          </div>
          <div>
            <PfFieldButton title={'VR/AR'} link={'portfolioList/VrAr'} />
            <PfFieldButton title={'e-Learning'} link={'portfolioList/eLearning'} />
            <PfFieldButton title={'R&D'} link={'portfolioList/rNd'} />
          </div>
        </div>
        <div id="portfolioImgs">
          <div className="pfImgLeftBox">
            <img src={data.portfolioImg1} alt="" />
          </div>
          <div className="pfImgRightBox">
            <img src={data.portfolioImg2} alt="" />
            <br />
            <img src={data.portfolioImg3} alt="" />
          </div>
        </div>
      </div>
    </PortfolioBox>
  );
};

export default Portfolio;
