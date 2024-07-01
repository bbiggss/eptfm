import React from 'react';
import AboutImg from './AboutImg';
import AboutTexts from './AboutTexts';
import { AboutComponent } from '../../assets/styles/main.styled';

const About = ({ data }) => {
  const aboutImg1 = data.aboutImg1;
  const aboutImg2 = data.aboutImg2;
  const aboutImg3 = data.aboutImg3;
  return (
    <AboutComponent>
      <div className="aboutTitle">
        <h1>ABOUT US</h1>
      </div>
      <div className="aboutContents">
        <AboutImg img={aboutImg1} />
        <AboutTexts
          img={aboutImg2}
          textsTitle={'VISION'}
          textsSubTitle={'무한한 가능성을 열다'}
          textsContents={`교육 공학의 혁신으로 미래의 학습을 설계하고, 교육의 진화를 함께하며 모든 학습자에게 맞춤형 학습 경험을 제공합니다.`}
        />
      </div>
      <div className="aboutContents">
        <AboutTexts
          textsTitle={'VALUE'}
          textsSubTitle={'혁신 · 협력 · 소통'}
          textsContents={`새로운 교육 기술 트렌드를 연구하고 적용하고, 성과와 필요에 맞춘 맞춤형 피드백 제공합니다. 열린 소통을 통해 협력적인 업무 환경 조성하여 시공간을 뛰어넘은 소통 학습을 체험할 수 있습니다.`}
        />
        <AboutImg img={aboutImg3} />
      </div>
    </AboutComponent>
  );
};

export default About;
