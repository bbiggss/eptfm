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
  .displayNone {
    display: none;
  }

  @media (min-width: 1025px) {
    margin-right: var(--pc-80px);
    margin-bottom: 60px;
    img {
      max-width: 56px;
      width: var(--pc-fixedButton);
    }
  }
  @media (max-width: 1024px) {
    margin-right: var(--mobile-30px);
    margin-bottom: calc(40.8vw + var(--mobile-30px));

    img {
      min-width: 32px;
      width: var(--mobile-fixedButton);
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
  });

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
