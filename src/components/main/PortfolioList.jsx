import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PortfolioListBox } from '../../assets/styles/main/portfolioList.styled';
import PortfolioLists from './PortfolioLists';
import BtnBox from '../common/button/BtnBox';

// import { testImg, listButton, backButton } from '../../assets/images';

const PortfolioList = (data) => {
  const location = useLocation();
  const [listTitle, updateListTitle] = useState('');
  const [portfolioItems, updatePortfolioItems] = useState({});

  // 리덕스에서 불러오던지 하기
  // const portfolioItems = [
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 갯벌은 어떤 곳일까?',
  //   },
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
  //   },
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
  //   },
  // ];

  useEffect(() => {
    if (location.pathname.split('/')[2] === 'VrAr') {
      updateListTitle('VR/AR');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img1.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 갯벌은 어떤 곳일까?',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img3.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 나의 호흡 기관은 어떻게 생겼을까',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 지구의 공전과 계절의 변화',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'e-Learning') {
      updateListTitle('e-Learning');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img1.png`,
          pfItemBigTitle: '농식품공무원교육원',
          pfItemSmallTitle: '저수지·댐 안전관리 및 재해예방',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교사가 이끄는 교실혁명',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img3.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '취급자 안전교육',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '정보공시 입력 지침 안내와 시스템매뉴얼',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img5.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '화학사고의 안전지대는 바로 사전교육',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img6.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&d/list3_img1.png`,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: '환경표지인증',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&d/list3_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    }
  }, [location.pathname]);
  return (
    <PortfolioListBox>
      <div className="topTitleBox">
        <p className="pageTitle robotoMedium">PORTFOLIO</p>
        <p className="fieldTitle RobotoLight">{listTitle}</p>
      </div>

      <ul>
        {Array.isArray(portfolioItems) &&
          portfolioItems.map((item, index) => (
            <PortfolioLists data={item} key={index} index={index} />

            // <li key={index}>
            //   <div>
            //     <img src={`${process.env.PUBLIC_URL}/assets/images/02.jpg}`} alt="" />
            //   </div>
            //   <div>
            //     <p>{item.pfItemBigTitle}</p>
            //     <p>{item.pfItemSmallTitle}</p>
            //   </div>
            // </li>
          ))}
      </ul>
      <BtnBox />
    </PortfolioListBox>
  );
};

export default PortfolioList;
