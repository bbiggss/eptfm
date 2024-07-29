import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Main from './components/main/Main';
import Footer from './components/common/footer/Footer';
import Video from './components/main/Video';
import PortfolioList from './components/portfolio/common/PortfolioList';
import Rnd from './components/portfolio/rNd/Rnd';
import { HeaderSpacer } from './assets/styles/common/header.styled';
import Contact from './components/contactUs/Contact';
import { useEffect, useState } from 'react';
import InquiryModal from './components/contactUs/InquiryModal';
import ScrollToTop from './components/common/scrollTop/ScrollTop';
import BlankPage from './components/common/blankPage/BlankPage';
import Loading from './components/common/loading/Loading';
// Vr/Ar
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
// e-Learning
import ReservoirDam from './components/portfolio/eLearning/01/ReservoirDam';
import ClassroomRevolution from './components/portfolio/eLearning/02/ClassroomRevolution';
import CyberSocializingOne from './components/portfolio/eLearning/03/CyberSocializingOne';
import CyberSocializingTwo from './components/portfolio/eLearning/04/CyberSocializingTwo';
import InformationDisclosure from './components/portfolio/eLearning/05/InformationDisclosure';
import ChemicalSafety from './components/portfolio/eLearning/06/ChemicalSafety';
import EastAsia from './components/portfolio/eLearning/07/EastAsia';
import ParentingGuide from './components/portfolio/eLearning/08/ParentingGuide';

function App() {
  const location = useLocation();

  const [modalStatus, setModalStatus] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.matchMedia('(min-width: 1025px)').matches
  );

  const [headerClass, setHeaderClass] = useState('transparent');
  const [isLoading, setIsLoading] = useState(true);
  // let initialPageName = location.pathname.split('/')[1];
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const pageName = location.pathname.split('/');
    if (pageName[1] === '') {
      setActiveLink('');
    } else if (pageName[1] === 'about') {
      setActiveLink('about');
    } else if (pageName[1] === 'business') {
      setActiveLink('business');
    } else if (pageName[1] === 'portfolio') {
      setActiveLink('portfolio');
    } else if (pageName[1] === 'contactUs') {
      setActiveLink('contactUs');
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass('colored');
      } else {
        setHeaderClass('transparent');
      }
    };
    const handleResize = () => {
      setIsDesktopScreen(window.matchMedia('(min-width: 1025px)').matches);
    };
    window.addEventListener('resize', handleResize);
    if (location.pathname === '/') {
      setHeaderClass('');
      window.addEventListener('scroll', handleScroll);
    } else {
      setHeaderClass('colored');
    }
    // 로딩 완료 후 로딩 상태를 비활성화합니다.
    const handleLoad = () => {
      setIsLoading(false);
    };
    // const timer = setTimeout(handleLoad, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // clearTimeout(timer); // clean-up function
    };
  }, [location]);

  return (
    <div className="App">
      {/* {isLoading ? <Loading /> : <></>} */}

      <ScrollToTop />
      {/* 모달 */}
      {modalStatus && <InquiryModal setModalStatus={setModalStatus} />}

      {/* PC해상도&홈화면일때 */}
      {isDesktopScreen === true && location.pathname === '/' ? '' : <HeaderSpacer />}
      <Header headerClass={headerClass} activeLink={activeLink} setActiveLink={setActiveLink} />
      {/* <Header headerClass={headerClass} /> */}

      {location.pathname === '/' ? <Video /> : ''}
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

        {/* e-Learning */}
        <Route
          path="/portfolio/e-Learning/저수지·댐 안전관리 및 재해예방"
          element={<ReservoirDam />}
        />
        <Route
          path="/portfolio/e-Learning/교사가 이끄는 교실혁명"
          element={<ClassroomRevolution />}
        />
        <Route
          path="/portfolio/e-Learning/사이버어울림(기술·가정, 진로와 직업, 한문)"
          element={<CyberSocializingOne />}
        />
        <Route
          path="/portfolio/e-Learning/사이버어울림(영어, 체육)"
          element={<CyberSocializingTwo />}
        />
        <Route
          path="/portfolio/e-Learning/정보공시 입력 지침안내와 시스템 메뉴얼"
          element={<InformationDisclosure />}
        />
        <Route path="/portfolio/e-Learning/화학물질안전에 대하여" element={<ChemicalSafety />} />
        <Route path="/portfolio/e-Learning/동아시아 원격연수" element={<EastAsia />} />
        <Route
          path="/portfolio/e-Learning/위탁모를 위한 양육 길잡이"
          element={<ParentingGuide />}
        />

        {/* R&D */}
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
