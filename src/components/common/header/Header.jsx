import React, { useState } from 'react';
import { HeaderBox } from '../../../assets/styles/common/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';

const Header = (data) => {
  // console.log('issue: ', data);
  return (
    <>
      <HeaderBox id="header" className={`robotoMedium ${data.headerClass}`}>
        <div id="headerContainer">
          <Link to={'/'}>
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
              <NavBox title={'ABOUT US'} link={'about'} activeLink={data.activeLink} />
              <NavBox title={'BUSSINESS'} link={'business'} activeLink={data.activeLink} />
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
    </>
  );
};

export default Header;
