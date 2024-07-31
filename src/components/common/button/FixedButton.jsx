import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BtnBox = styled.div`
  .btnBox {
    position: fixed;
    bottom: 0;
    img {
      cursor: pointer;
      border-radius: 50%;
    }
  }

  @media (min-width: 1025px) {
    .btnBox {
      right: 72px;

      img:last-child {
        margin-top: 24px;
        margin-bottom: 60px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    img {
      width: 35px;
    }
    .btnBox {
      right: 14.73px;

      img:first-child {
        margin-bottom: 165px;
      }

      img:last-child {
        display: none;
      }
    }
  }
`;

const FixedButton = () => {
  const [topBtnView, setTopBtnView] = useState('');
  //   const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.innerWidth <= 767) {
        // 모바일 환경일 때
        if (scrollTop + windowHeight >= documentHeight) {
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

  const listBtn = () => {
    alert('리스트팝업');
  };
  return (
    <BtnBox>
      <div className={`btnBox`}>
        <img
          className={topBtnView}
          // onClick={() => nav(-1)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          src={`${process.env.PUBLIC_URL}/assets/images/common/btn_up.png`}
          alt=""
        />
        <br />
        <img
          onClick={listBtn}
          src={`${process.env.PUBLIC_URL}/assets/images/common/btn_p_list.png`}
          alt=""
        />
      </div>
    </BtnBox>
  );
};

export default FixedButton;
