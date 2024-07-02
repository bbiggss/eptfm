import React from 'react';
import { HeaderBox, HeaderBottomBox } from '../../assets/styles/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';

const Header = ({ img }) => {
  return (
    <>
      <HeaderBox>
        <div id="header">
          <Link to={'/'}>
            <img src={img && img.logoImg} alt="" />
          </Link>
          <span>
            <ul>
              <NavBox title={'ABOUT US'} link={'about'} />
              <NavBox title={'BUSSINESS'} link={'business'} />
              <NavBox title={'PORTFOLIO'} link={'portfolio'} />
            </ul>
          </span>
        </div>
      </HeaderBox>
      <HeaderBottomBox />
    </>
  );
};

export default Header;
