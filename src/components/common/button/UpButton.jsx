import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledUpButton = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  img {
    cursor: pointer;
    border-radius: 100%;
  }

  @media (min-width: 1465px) {
    margin-right: 80px;
    margin-bottom: 60px;
  }
  @media (min-width: 1025px) and (max-width: 1465px) {
    margin-right: 35px;
    margin-bottom: 60px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    margin-right: 30px;
    margin-bottom: calc(40.8vw + 30px);
    /* margin-bottom: 183px; */
  }

  @media (min-width: 1025px) {
    img {
      max-width: 56px;
      width: 2.92vw;
    }
  }
  @media (max-width: 1024px) {
    img {
      min-width: 32px;
      width: 8.53vw;
    }
  }
`;

const UpButton = () => {
  const [topBtnView, setTopBtnView] = useState('');
  const location = useLocation();

  useEffect(() => {
    setTopBtnView('displayNone');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const documentHeight = document.documentElement.scrollHeight;

      const fixedHeaderHeight = 80;

      if (window.innerWidth <= 767) {
        // 모바일 환경일 때
        if (scrollTop + windowHeight >= documentHeight - fixedHeaderHeight) {
          setTopBtnView('');
        } else {
          setTopBtnView('displayNone');
        }
      } else {
        // PC 환경일 때
        if (scrollTop > 500) {
          setTopBtnView('');
        } else {
          setTopBtnView('displayNone');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledUpButton>
      <img
        className={topBtnView}
        // onClick={() => nav(-1)}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        src={`${process.env.PUBLIC_URL}/assets/images/common/btn_up.png`}
        alt=""
      />
    </StyledUpButton>
  );
};

export default UpButton;
