import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PortfolioListBox } from '../../assets/styles/portfolioList.styled';
import PortfolioLists from './PortfolioLists';

import { testImg, listButton, backButton } from '../../assets/images';

const PortfolioList = (data) => {
  const location = useLocation();
  const [listTitle, updateListTitle] = useState('');
  const [portfolioItems, updatePortfolioItems] = useState({});
  const nav = useNavigate();

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
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 갯벌은 어떤 곳일까?',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 나의 호흡 기관은 어떻게 생겼을까',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'eLearning') {
      updateListTitle('e-Learning');
      const portfolioItems2 = [
        {
          pfItemImg: testImg,
          pfItemBigTitle: '농식품공무원교육원',
          pfItemSmallTitle: '저수지·댐 안전관리 및 재해예방',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교사가 이끄는 교실혁명',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '취급자 안전교육',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '정보공시 입력 지침 안내와 시스템매뉴얼',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '화학사고의 안전지대는 바로 사전교육',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: testImg,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: '환경표지인증',
        },
        {
          pfItemImg: testImg,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    }
  }, [location.pathname]);

  const listBtn = () => {
    alert('1');
  };

  return (
    <PortfolioListBox>
      <div className="topTitleBox">
        <p class="pageTitle robotoMedium">PORTFOLIO</p>
        <p class="fieldTitle RobotoLight">{listTitle}</p>
      </div>

      <ul>
        {Array.isArray(portfolioItems) &&
          portfolioItems.map((item, index) => (
            <PortfolioLists data={item} key={index} index={index} />

            // <li key={index}>
            //   <div>
            //     <img src={testImg} alt="" />
            //   </div>
            //   <div>
            //     <p>{item.pfItemBigTitle}</p>
            //     <p>{item.pfItemSmallTitle}</p>
            //   </div>
            // </li>
          ))}
      </ul>

      <div className="btnBox">
        <img onClick={listBtn} src={listButton} alt="" />
        <br />
        <img onClick={() => nav(-1)} src={backButton} alt="" />
      </div>
    </PortfolioListBox>
  );
};

export default PortfolioList;
