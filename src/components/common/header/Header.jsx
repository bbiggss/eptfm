import React, { useEffect, useState } from 'react';
import { HeaderBox } from '../../../assets/styles/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass('colored');
      } else {
        setHeaderClass('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <HeaderBox id="header" className={headerClass}>
        <div id="headerContainer">
          <Link to={'/'}>
            {/* <img id="logoImg" src={img && img.logoImg} alt="" /> */}
            <img id="logoImg" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />
          </Link>
          <span>
            <img
              id="dropDownImg"
              src={`${process.env.PUBLIC_URL}/assets/images/dropDown.png`}
              alt=""
            />
            <ul>
              <NavBox title={'ABOUT US'} link={'about'} />
              <NavBox title={'BUSSINESS'} link={'business'} />
              <NavBox title={'PORTFOLIO'} link={'portfolio/VrAr'} />
              <NavBox title={'CONTACT US'} link={'contactUs'} />
            </ul>
          </span>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
