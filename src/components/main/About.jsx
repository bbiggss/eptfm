import React, { useEffect, useState } from 'react';
import { AboutBox } from '../../assets/styles/main/about.styled';
import AboutImg from './AboutImg';
import AboutDescription from './AboutDescription';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
const About = () => {
  // const [animateClass, setAnimateClass] = useState('');

  //   const elements = document.querySelectorAll('.aboutTitle p, .aboutContents img');
  //   let observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const element = entry.target;

  //           // console.log(element);
  //           if (element.tagName === 'IMG') {
  //             element.onload = () => applyAnimation(element);
  //             if (element.complete) {
  //               element.onload();
  //             }
  //           } else {
  //             applyAnimation(element);
  //           }
  //           observer.unobserve(element);
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   elements.forEach((el) => {
  //     observer.observe(el);
  //   });

  //   function applyAnimation(element) {
  //     // const delay = Array.from(elements).indexOf(element) * 500; // 100ms 간격으로 적용
  //     const index = Array.from(elements).indexOf(element);
  //     const delay = index * 500;

  //     setTimeout(() => {
  //       setAnimateClass((preveState) => ({
  //         ...preveState,
  //         [index]: true,
  //       }));
  //       // if (element.className === 'pTag') {
  //       //   console.log('ptag: ', element);
  //       // } else if (element.className === 'ab') {
  //       //   console.log('img:', element);
  //       // }
  //       // setAnimateClass('animate');
  //     }, delay);
  // }
  const refs = useIntersectionObserver();
  return (
    <AboutBox id="about">
      <div className="aboutTitle">
        <p className="slideUp" ref={(el) => (refs.current[0] = { ref: el })}>
          ABOUT US
        </p>
      </div>
      <div className="aboutContents">
        <AboutImg ref={(el) => (refs.current[1] = { ref: el })} img={`${process.env.PUBLIC_URL}/assets/images/main/about_img1.png`} />
        <AboutDescription
          ref={(el) => (refs.current[2] = { ref: el })}
          img={`${process.env.PUBLIC_URL}/assets/images/main/about_img2.png`}
          textsTitle={'VISION'}
          textsSubTitle={'무한한 가능성을 열다'}
          textsContents={`교육 공학의 혁신으로 미래의 학습을 설계하고,\n 교육의 진화를 함께하며 모든 학습자에게\n 맞춤형 학습 경험을 제공합니다.`}
        />
      </div>
      <div className="aboutContents">
        <AboutDescription
          ref={(el) => (refs.current[3] = { ref: el })}
          textsTitle={'VALUE'}
          textsSubTitle={'혁신 · 협력 · 소통'}
          textsContents={`새로운 교육 기술 트렌드를 연구하고 적용하고,\n 성과와 필요에 맞춘 맞춤형 피드백 제공합니다.\n 열린 소통을 통해 협력적인 업무 환경 조성하여\n 시공간을 뛰어넘은 소통 학습을 체험할 수\n 있습니다.`}
        />
        <AboutImg ref={(el) => (refs.current[4] = { ref: el })} img={`${process.env.PUBLIC_URL}/assets/images/main/about_img3.png`} />
      </div>
    </AboutBox>
  );
};

export default About;
