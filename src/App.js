// import logo from './logo.svg';
import './App.css';

// import {
//   // 헤더
//   logoImg,
//   dropDown,
//   // 메인
//   // about
//   aboutImg1,
//   aboutImg2,
//   aboutImg3,
//   // business
//   businessImg1,
//   businessImg2,
//   businessImg3,
//   businessHoverImg1,
//   businessHoverImg2,
//   businessHoverImg3,
//   // portfolio
//   portfolioImg1,
//   portfolioImg2,
//   portfolioImg3,
//   portfolioBg,
//   portfolioBg2,
//   // 푸터
//   bottomLogoImg,
// } from './assets/images';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Main from './components/main/Main';
import Footer from './components/common/footer/Footer';
import Video from './components/main/Video';
import PortfolioList from './components/portfolio/PortfolioList';
import ELearning from './components/portfolio/eLearning/ELearning';
import Rnd from './components/portfolio/rNd/Rnd';
import { HeaderPlaceholder } from './assets/styles/common/header.styled';
import Contact from './components/contactUs/Contact';
import { useEffect, useState } from 'react';
import InquiryModal from './components/contactUs/InquiryModal';
import ScrollToTop from './components/common/scrollTop/ScrollTop';
import BlankPage from './components/common/blankPage/BlankPage';

import MudFlat from './components/portfolio/vrAr/01/MudFlat';
import EcosystemRestoration from './components/portfolio/vrAr/02/EcosystemRestoration';
import EarthRotationChangingSeasons from './components/portfolio/vrAr/03/EarthRotationChangingSeasons';
import BongsuPaval from './components/portfolio/vrAr/05/BongsuPaval';
import ExploreDokdo from './components/portfolio/vrAr/06/ExploreDokdo';
import ForensicScientist from './components/portfolio/vrAr/07/ForensicScientist';
import ExploreFreiburg from './components/portfolio/vrAr/08/ExploreFreiburg';
import TyphoonEvacuation from './components/portfolio/vrAr/09/TyphoonEvacuation';
import FrenchClimateLifestyle from './components/portfolio/vrAr/10/FrenchClimateLifestyle';
import Mayor from './components/portfolio/vrAr/11/Mayor';
import WaterTemperatureSalinityExploration from './components/portfolio/vrAr/12/WaterTemperatureSalinityExploration';
import Bimetal from './components/portfolio/vrAr/13/Bimetal';
import StarsCharacteristics from './components/portfolio/vrAr/14/StarsCharacteristics';
import CivilTrial from './components/portfolio/vrAr/15/CivilTrial';
import BuildingGreatCity from './components/portfolio/vrAr/16/BuildingGreatCity';
import BoneJointMuscle from './components/portfolio/vrAr/17/BoneJointMuscle';
import MapExpert from './components/portfolio/vrAr/18/MapExpert';
import SurvivalBag from './components/portfolio/vrAr/19/SurvivalBag';

function App() {
  // let headerLogoImg = { logoImg, dropDown };
  // let footerLogoImg = { bottomLogoImg };
  // let mainImgs = {
  //   aboutImg1,
  //   aboutImg2,
  //   aboutImg3,
  //   businessImg1,
  //   businessImg2,
  //   businessImg3,
  //   businessHoverImg1,
  //   businessHoverImg2,
  //   businessHoverImg3,
  //   portfolioImg1,
  //   portfolioImg2,
  //   portfolioImg3,
  //   portfolioBg,
  //   portfolioBg2,
  // };

  const location = useLocation();
  const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
  const [modalStatus, setModalStatus] = useState(false);

  const [headerClass, setHeaderClass] = useState('transparent');

  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderClass('transparent');
    }
    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > 50) {
          setHeaderClass('colored');
        } else {
          setHeaderClass('transparent');
        }
      } else {
        setHeaderClass('colored');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div className="App">
      <ScrollToTop />
      {/* 모달 */}

      {modalStatus && <InquiryModal setModalStatus={setModalStatus} />}

      {/* 메인일때 */}
      <Header headerClass={headerClass} />

      {isSmallScreen ? <HeaderPlaceholder /> : ''}
      {location.pathname === '/' ? <Video /> : ''}
      {location.pathname === '/' ? (
        ''
      ) : (
        <>
          <HeaderPlaceholder />
        </>
      )}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio/VrAr" element={<PortfolioList />} />
        <Route path="/portfolio/e-Learning" element={<PortfolioList />} />
        <Route path="/portfolio/R&D" element={<PortfolioList />} />

        {/* vr/ar */}
        {/* <Route path="/portfolio/VrAr/:id" element={<VrAr />} /> */}
        <Route path="/portfolio/VrAr/AR | 갯벌은 어떤 곳일까?" element={<MudFlat />} />
        <Route
          path="/portfolio/VrAr/AR | 미션! 생태계를 복원하라"
          element={<EcosystemRestoration />}
        />
        <Route
          path="/portfolio/VrAr/AR | 지구의 공전과 계절의 변화"
          element={<EarthRotationChangingSeasons />}
        />
        <Route
          path="/portfolio/VrAr/AR I 옛 사람들의 통신수단, 봉수제도와 파발제도"
          element={<BongsuPaval />}
        />
        <Route path="/portfolio/VrAr/VR I 우리 땅, 독도 탐험하기" element={<ExploreDokdo />} />
        <Route
          path="/portfolio/VrAr/VR I 과학수사요원이 되어 범인을 찾아라!"
          element={<ForensicScientist />}
        />
        <Route
          path="/portfolio/VrAr/VR I 세계의 환경 수도 프라이부르크 구경하기"
          element={<ExploreFreiburg />}
        />
        <Route path="/portfolio/VrAr/VR I 태풍 대피요령 알아보기" element={<TyphoonEvacuation />} />
        <Route
          path="/portfolio/VrAr/VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활"
          element={<FrenchClimateLifestyle />}
        />
        <Route
          path="/portfolio/VrAr/VR I 직접 만드는 민주적인 선거! 시장 출마하기"
          element={<Mayor />}
        />
        <Route
          path="/portfolio/VrAr/VR I 바닷속 생물 채집과 수온, 염분 탐사"
          element={<WaterTemperatureSalinityExploration />}
        />
        <Route path="/portfolio/VrAr/AR I 열팽창 활용하여 바이메탈 만들기" element={<Bimetal />} />
        <Route
          path="/portfolio/VrAr/AR I 별의 색과 밝기를 이용한 별의 특성 알아보기"
          element={<StarsCharacteristics />}
        />
        <Route path="/portfolio/VrAr/AR I 나도 할 수 있다, 민사 재판" element={<CivilTrial />} />
        <Route
          path="/portfolio/VrAr/AR I 나만의 살기 좋은 도시 만들기"
          element={<BuildingGreatCity />}
        />
        <Route
          path="/portfolio/VrAr/AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자"
          element={<BoneJointMuscle />}
        />
        <Route
          path="/portfolio/VrAr/AR I 지도를 볼 줄 아는, 나는 지도박사"
          element={<MapExpert />}
        />
        <Route path="/portfolio/VrAr/VR I 나만의 생존가방 준비하기" element={<SurvivalBag />} />

        <Route path="/portfolio/e-Learning/:id" element={<ELearning />} />
        <Route path="/portfolio/R&D/:id" element={<Rnd />} />
        <Route
          path="/contactUs"
          element={<Contact modalStatus={modalStatus} setModalStatus={setModalStatus} />}
        />

        <Route path="*" element={<BlankPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
