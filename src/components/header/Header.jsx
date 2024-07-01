import React from 'react';
import { GlobalStyle, HeaderBox } from '../../assets/styles/header.styled';
import NavBox from './NavBox';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ data }) => {
  return (
    <>
      <HeaderBox>
        <div id="header">
          <Link to={'/'}>
            <img src={data && data.logoImg} alt="" />
          </Link>
          <span>
            <ul>
              <GlobalStyle>
                <NavBox data={'ABOUT US'} />
                <NavBox data={'BUSSINESS'} />
                <NavBox data={'PORTFOLIO'} />
              </GlobalStyle>
            </ul>
          </span>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
