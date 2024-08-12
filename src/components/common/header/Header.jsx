import React, { useState } from 'react';
import { HeaderBox } from '../../../assets/styles/common/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: ${(props) => (props.$show ? 'block' : 'none')};
    position: fixed;
    background-color: white;
    width: 100%;
    text-align: center;
    z-index: 1;
    li * {
      color: #292929;
      font-family: 'Roboto-Medium';
      font-size: 20px;
    }
    li {
      margin-bottom: 30px;
    }
    li:first-child {
      margin-top: 30px;
    }
    .portfolioLi a {
      display: block;
      /* width: 200px; */
      height: 36px;
      line-height: 36px;

      color: #767676;
      font-size: 16px;
    }
    .portfolioLi a:nth-child(2) {
      margin-top: 4px;
    }
  }
  @media (max-width: 767px) {
    display: ${(props) => (props.$show ? 'block' : 'none')};
    position: fixed;
    background-color: white;
    width: 100%;
    text-align: center;
    z-index: 1;
    li * {
      color: #292929;
      font-family: 'Roboto-Medium';
      font-size: 20px;
    }
    li {
      margin-bottom: 30px;
    }
    li:first-child {
      margin-top: 30px;
    }
    .portfolioLi a {
      display: block;
      /* width: 200px; */
      height: 36px;
      line-height: 36px;

      color: #767676;
      font-size: 16px;
    }
    .portfolioLi a:nth-child(2) {
      margin-top: 4px;
    }
  }
`;

const Header = (data) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClick = () => {
    setShowDropDown(true);
  };
  const dropDownClose = () => {
    setShowDropDown(false);
  };

  return (
    <>
      <HeaderBox id="header" className={`robotoMedium ${data.headerClass}`}>
        <div id="headerContainer">
          <Link to={'/'}>
            <img
              id="logoImg"
              src={`${process.env.PUBLIC_URL}/assets/images/common/logo.png`}
              alt=""
            />
          </Link>
          <span>
            {showDropDown ? (
              <img
                id="xBtn"
                onClick={() => dropDownClose()}
                src={`${process.env.PUBLIC_URL}/assets/images/common/xBtn.png`}
                alt=""
              />
            ) : (
              <img
                id="dropDownImg"
                onClick={() => dropDownClick()}
                src={`${process.env.PUBLIC_URL}/assets/images/common/dropdown.png`}
                alt=""
              />
            )}

            <ul>
              {/* <NavBox title={'ABOUT US'} link={'about'} activeLink={data.activeLink} />
              <NavBox title={'BUSINESS'} link={'business'} activeLink={data.activeLink} /> */}
              <NavBox title={'ABOUT US'} link={'/#about'} />
              <NavBox title={'BUSINESS'} link={'/#business'} />
              <li className={`dropdown`}>
                <p className={data.activeLink === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>
                <div className="dropdown-content robotoRegular">
                  <Link to={'portfolio/VrAr'}>VR/AR</Link>
                  <Link to={'portfolio/e-Learning'}>e-Learning</Link>
                  <Link to={'portfolio/R&D'}>R&D</Link>
                </div>
              </li>
              <NavBox title={'CONTACT US'} link={'contactUs'} activeLink={data.activeLink} />
            </ul>
          </span>
        </div>
      </HeaderBox>

      <StyledDropDown $show={showDropDown}>
        <ul>
          <NavBox setShowDropDown={setShowDropDown} title={'ABOUT US'} link={'/#about'} />
          <NavBox setShowDropDown={setShowDropDown} title={'BUSINESS'} link={'/#business'} />
          <li className="portfolioLi">
            <p className={data.activeLink === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>
            <Link onClick={() => dropDownClose()} to={'portfolio/VrAr'}>
              VR/AR
            </Link>
            <Link onClick={() => dropDownClose()} to={'portfolio/e-Learning'}>
              e-Learning
            </Link>
            <Link onClick={() => dropDownClose()} to={'portfolio/R&D'}>
              R&D
            </Link>
          </li>
          <NavBox
            setShowDropDown={setShowDropDown}
            title={'CONTACT US'}
            link={'contactUs'}
            activeLink={data.activeLink}
          />
        </ul>
      </StyledDropDown>
    </>
  );
};

export default Header;
