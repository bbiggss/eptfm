import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PortfolioListBox } from '../../../assets/styles/portfolio/portfolioList.styled';
import PortfolioLists from './PortfolioLists';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';

// import { testImg, listButton, backButton } from '../../assets/images';

const PortfolioList = (data) => {
  const location = useLocation();
  const [listTitle, updateListTitle] = useState('');
  const [portfolioItems, updatePortfolioItems] = useState({});

  useEffect(() => {
    if (location.pathname.split('/')[2] === 'VrAr') {
      updateListTitle('VR/AR');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img1.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 갯벌은 어떤 곳일까?',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 미션! 생태계를 복원하라',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img3.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 지구의 공전과 계절의 변화',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 땅의 높낮이를 나타내는 등고선',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img5.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 옛 사람들의 통신수단, 봉수제도와 파발제도',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img6.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 우리 땅, 독도 탐험하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img7.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 과학수사요원이 되어 범인을\n 찾아라!',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img8.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 세계의 환경 수도 프라이부르크\n 구경하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img9.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 태풍 대피요령 알아보기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img10.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img11.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 직접 만드는 민주적인 선거! 시장 출마하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img12.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 바닷속 생물 채집과 수온, 염분\n 탐사',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img13.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 열팽창 활용하여 바이메탈 만들기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img14.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 별의 색과 밝기를 이용한 별의\n 특성 알아보기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img15.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 나도 할 수 있다, 민사 재판',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img16.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 나만의 살기 좋은 도시 만들기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img17.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img18.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 지도를 볼 줄 아는, 나는 지도박사',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img19.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 나만의 생존가방 준비하기',
        },

        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img20.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 이중섭 작품을 통해 알아보는 6·25 전쟁',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'e-Learning') {
      updateListTitle('e-Learning');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img1.png`,
          pfItemBigTitle: '농식품공무원교육원',
          pfItemSmallTitle: '저수지·댐 안전관리 및 재해예방',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교사가 이끄는 교실혁명',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img3.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림(기술·가정, 진로와 직업, 한문)',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림(영어, 체육)',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img5.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '정보공시 입력 지침안내와 시스템\n 메뉴얼',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img6.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '화학물질안전에 대하여',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img7.png`,
          pfItemBigTitle: '동북아역사재단',
          pfItemSmallTitle: '동아시아 원격연수',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img8.png`,
          pfItemBigTitle: '아동권리보장원',
          pfItemSmallTitle: '위탁모를 위한 양육 길잡이',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img1.png`,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: '환경표지인증',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    }
  }, [location.pathname]);
  return (
    <>
      <Breadcrumb />
      <PortfolioListBox>
        <div className="topTitleBox">
          <p className="pageTitle robotoMedium">PORTFOLIO</p>
          <p className="fieldTitle RobotoLight">{listTitle}</p>
        </div>

        <ul>
          {Array.isArray(portfolioItems) &&
            portfolioItems.map((item, index) => (
              <PortfolioLists data={item} key={index} index={index} />
            ))}
        </ul>
      </PortfolioListBox>
    </>
  );
};

export default PortfolioList;
