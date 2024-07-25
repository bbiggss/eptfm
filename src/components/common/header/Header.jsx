import React, { useState } from 'react';
import { HeaderBox } from '../../../assets/styles/common/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';

const Header = (data) => {
  const [activeLink, setActiveLink] = useState('');
  return (
    <>
      <HeaderBox id="header" className={`robotoMedium ${data.headerClass}`}>
        <div id="headerContainer">
          <Link to={'/'} onClick={() => setActiveLink('')}>
            {/* <img id="logoImg" src={img && img.logoImg} alt="" /> */}
            <img
              id="logoImg"
              src={`${process.env.PUBLIC_URL}/assets/images/common/logo.png`}
              alt=""
            />
          </Link>
          <span>
            <img
              id="dropDownImg"
              src={`${process.env.PUBLIC_URL}/assets/images/common/dropdown.png`}
              alt=""
            />
            <ul>
              <NavBox
                title={'ABOUT US'}
                link={'about'}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <NavBox
                title={'BUSSINESS'}
                link={'business'}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <li className={`dropdown`}>
                <p className={activeLink === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>
                <div className="dropdown-content robotoRegular">
                  <Link onClick={() => setActiveLink('portfolio')} to={'portfolio/VrAr'}>
                    VR/AR
                  </Link>
                  <Link onClick={() => setActiveLink('portfolio')} to={'portfolio/e-Learning'}>
                    e-Learning
                  </Link>
                  <Link onClick={() => setActiveLink('portfolio')} to={'portfolio/R&D'}>
                    R&D
                  </Link>
                </div>
              </li>
              <NavBox
                title={'CONTACT US'}
                link={'contactUs'}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </ul>
          </span>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
