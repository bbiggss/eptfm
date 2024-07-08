import React from 'react';
import { BusinessBox } from '../../assets/styles/main.styled';
import BusinessItems from './BusinessItems';

const Business = ({ data }) => {
  const businessImg1 = data.businessImg1;
  const businessHoverImg1 = data.businessHoverImg1;

  const businessImg2 = data.businessImg2;
  const businessHoverImg2 = data.businessHoverImg2;

  const businessImg3 = data.businessImg3;
  const businessHoverImg3 = data.businessHoverImg3;

  return (
    <BusinessBox id="business">
      <div id="container">
        <div id="businessTitleBox">
          <p id="businessTitle">BUSINESS</p>
        </div>
        <div id="contentsWrap">
          <ul>
            <BusinessItems
              img={businessImg1}
              hoverImg={businessHoverImg1}
              text={'VR/AR'}
              hoverText={
                '우리는 혁신적인 디지털 학습 솔루션을\n 통해 누구나 어디서든 쉽게 배울 수 있는\n 환경을 제공합니다.'
              }
            />
            <BusinessItems
              img={businessImg2}
              hoverImg={businessHoverImg2}
              text={'E-learning'}
              hoverText={
                '가상현실(VR)과 증강현실(AR)을 통해\n 교육의 경계를 허물고, 몰입감 있는\n 학습 경험을 제공합니다.'
              }
            />
            <BusinessItems
              img={businessImg3}
              hoverImg={businessHoverImg3}
              text={'R&D'}
              hoverText={
                '최첨단 기술과 지속적인 연구개발(R&D)을\n 통해 교육의 한계를 넘어서고, 새로운 학습\n방법을 개척합니다.'
              }
            />
          </ul>
        </div>
      </div>
    </BusinessBox>
  );
};

export default Business;
