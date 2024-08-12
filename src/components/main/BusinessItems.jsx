import React from 'react';
import useMobile from '../hooks/useMobile';
import styled from 'styled-components';

const StyledBusinessItems = styled.li`
  position: relative;
  overflow: hidden;

  .hoverOff p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 42px;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
    filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
  }

  .hoverOn {
    display: none;

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p:first-child {
        color: #ffffff;
        font-size: 42px;
        text-align: center;
        font-family: 'Roboto-Medium';
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
        margin-bottom: 60px;
      }

      p:last-child {
        color: white;
        font-size: 26px;
        text-align: center;
        font-family: 'NanumSquareB';
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
        line-height: 40px;
        white-space: nowrap;
      }
    }
  }

  &:hover .hoverOff {
    display: none;
  }
  &:hover .hoverOn {
    display: block;
  }

  @media (min-width: 1901px) {
    img {
      width: 100%; /* 이미지가 그리드 셀의 너비에 맞게 조정 */
      max-width: 500px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1900px) {
    img {
      width: 100%; /* 이미지가 그리드 셀의 너비에 맞게 조정 */
      max-width: 500px;
    }
    .hoverOn {
      div p:first-child {
        margin-bottom: 0;
      }
      div p:first-child,
      div p:last-child {
        transform: scale(0.6);
      }
    }
  }
  @media (max-width: 1024px) {
    .hoverOff {
      display: none;
    }
    position: relative;

    .hoverOn {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
      img p {
        color: #ffffff;
        letter-spacing: -0.02em;
        text-align: center;
        line-height: 24px;
        /* filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6)); */
      }

      & p:first-child {
        font-family: 'NanumSquareEB';

        font-size: 22px;
        font-weight: 800;
        margin-bottom: 10px;
      }

      & p:last-child {
        font-family: 'NanumSquareB';

        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;

const BusinessItems = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const isMobile = useMobile();
  return (
    <StyledBusinessItems>
      <div className="hoverOff">
        <p>{data && data.text}</p>
        <img src={data && data.img} alt="" />
      </div>

      <div className="hoverOn">
        <img src={isMobile ? data && data.mobile_hoverImg : data && data.hoverImg} alt="" />
        <div>
          <p>{data && data.text}</p>
          <p>{renderTextWithLineBreaks(data && data.hoverText)}</p>
        </div>
      </div>
    </StyledBusinessItems>
  );
};

export default BusinessItems;
