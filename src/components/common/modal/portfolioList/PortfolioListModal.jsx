import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Item from './Item';

const StyledPortfolioListModal = styled.div`
  .modalBackground {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: #071018;
    opacity: 90%;
  }
  .modalContainer {
    position: fixed;
    z-index: 3;
    max-width: 1556px;
    width: 80%;
    height: auto;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .xBtn {
    position: absolute;
    z-index: 10;
    right: 0;
    cursor: pointer;
  }

  .title {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 70px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    display: inline-block;

    margin-bottom: 48px;
  }
  .gridWrapper {
    display: grid;
    grid-template-columns: repeat(3, 460px);
    padding: 0;
    gap: 8px 88px;
    .section {
      width: 100%;
      max-width: 460px;
      a {
        text-decoration: none;
      }

      .category {
        color: #ffffff;
        text-align: left;
        font-family: 'Roboto-Regular';
        font-size: 36px;
        position: relative;

        margin-bottom: 26px;
      }
      .item {
        position: relative;
        color: #ffffff;
        text-align: left;
        font-family: 'NanumSquareB';
        font-size: 18px;
        letter-spacing: -0.02em;
        height: 30px;
        list-style: none;

        margin-bottom: 5px;

        .move {
          display: none;
          position: absolute;
          right: 0;
        }
      }
      .item:hover {
        background: rgba(255, 255, 255, 0);
        border-style: solid;
        border-color: #48c2c5;
        color: #48c2c5;
        border-width: 0px 0px 1px 0px;
        box-sizing: border-box;
        .move {
          display: inline;
        }
      }
    }
    .section:nth-child(2) {
      padding-top: 68px;
    }
  }
`;

const PortfolioListModal = ({ setPortfolioListModalStatus }) => {
  return (
    <StyledPortfolioListModal>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        {/* title */}
        <p className="title">Portfolio</p>
        <img
          className="xBtn"
          onClick={() => setPortfolioListModalStatus(false)}
          src={`${process.env.PUBLIC_URL}/assets/images/common/x.png`}
          alt=""
        />

        <div className="gridWrapper">
          <ul className="section">
            <Category category={'VR/AR'} />
            <Item
              name={'AR I 갯벌은 어떤 곳일까?'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR | 갯벌은 어떤 곳일까?'}
            />
            <Item
              name={'AR I 미션! 생태계를 복원하라'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR | 미션! 생태계를 복원하라'}
            />
            <Item
              name={'AR | 지구의 공전과 계절의 변화'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR | 지구의 공전과 계절의 변화'}
            />
            <Item
              name={'AR I 땅의 높낮이를 나타내는 등고선'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 땅의 높낮이를 나타내는 등고선'}
            />
            <Item
              name={'AR I 옛 사람들의 통신수단, 봉수제도와 파발제도'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 옛 사람들의 통신수단, 봉수제도와 파발제도'}
            />
            <Item
              name={'VR I 우리 땅, 독도 탐험하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 우리 땅, 독도 탐험하기'}
            />
            <Item
              name={'VR I 과학수사요원이 되어 범인을 찾아라!'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 과학수사요원이 되어 범인을 찾아라!'}
            />
            <Item
              name={'VR I 세계의 환경 수도 프라이부르크 구경하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 세계의 환경 수도 프라이부르크 구경하기'}
            />
            <Item
              name={'VR I 태풍 대피요령 알아보기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 태풍 대피요령 알아보기'}
            />
            <Item
              name={'VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활'}
            />
            <Item
              name={'VR I 직접 만드는 민주적인 선거! 시장 출마하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 직접 만드는 민주적인 선거! 시장 출마하기'}
            />
            <Item
              name={'VR I 바닷속 생물 채집과 수온, 염분 탐사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 바닷속 생물 채집과 수온, 염분 탐사'}
            />
            <Item
              name={'AR I 열팽창 활용하여 바이메탈 만들기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 열팽창 활용하여 바이메탈 만들기'}
            />
            <Item
              name={'AR I 별의 색과 밝기를 이용한 별의 특성 알아보기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 별의 색과 밝기를 이용한 별의 특성 알아보기'}
            />
            <Item
              name={'AR I 나도 할 수 있다, 민사 재판'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 나도 할 수 있다, 민사 재판'}
            />
            <Item
              name={'AR I 나만의 살기 좋은 도시 만들기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 나만의 살기 좋은 도시 만들기'}
            />
          </ul>
          <ul className="section">
            <Item
              name={'AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}
            />
            <Item
              name={'AR I 지도를 볼 줄 아는, 나는 지도박사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 지도를 볼 줄 아는, 나는 지도박사'}
            />
            <Item
              name={'VR I 나만의 생존가방 준비하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 나만의 생존가방 준비하기'}
            />
            <Item
              name={'VR I 이중섭 작품을 통해 알아보는 6·25 전쟁'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 이중섭 작품을 통해 알아보는 6·25 전쟁'}
            />
            <Category category={'e-Learning'} style={{ marginTop: '142px' }} />
            <Item
              name={'저수지·댐 안전관리 및 재해예방'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/저수지·댐 안전관리 및 재해예방'}
            />
            <Item
              name={'교사가 이끄는 교실혁명'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/교사가 이끄는 교실혁명'}
            />
            <Item
              name={'사이버어울림(기술·가정, 진로와 직업, 한문)'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/사이버어울림(기술·가정, 진로와 직업, 한문)'}
            />
            <Item
              name={'사이버어울림(영어, 체육)'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/사이버어울림(영어, 체육)'}
            />
            <Item
              name={'정보공시 입력 지침안내와 시스템 메뉴얼'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/정보공시 입력 지침안내와 시스템 메뉴얼'}
            />
            <Item
              name={'처음 만나는 동아시아사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/동아시아 원격연수'}
            />
            <Item
              name={'위탁모를 위한 양육 길잡이'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/위탁모를 위한 양육 길잡이'}
            />
          </ul>
          <ul className="section">
            <Category category={'R&D'} />
            <Item
              name={'친환경 소비의 첫걸음, 환경표지인증을 통한 더 나은 선택'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/R&D/환경표지인증'}
            />
            <Item
              name={'교실혁명 강의교안'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/R&D/교실혁명 강의교안'}
            />
          </ul>
        </div>
      </div>
    </StyledPortfolioListModal>
  );
};

export default PortfolioListModal;
