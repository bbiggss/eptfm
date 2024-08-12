import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useMobile from '../hooks/useMobile';

const StyledAboutDescription = styled.div`
  @media (min-width: 1901px) {
    position: relative;
    aspect-ratio: 960 / 1000;
    width: 50%;
    max-width: 960px;
    /* background-color: skyblue; */

    & img {
      width: 247px;
      height: 286px;
      position: absolute;
      right: 0;
      /* margin-right: 186px; */
      margin-right: 213px;
      margin-top: -35px;
    }
    & .textsBoxContainer {
      margin-top: 260px;
      margin-left: 106px;
      /* background-color: aqua; */

      &.marginLeft182 {
        /* background-color: yellowgreen; */
        margin-left: 182px;
      }

      & .textsTitle {
        font-size: 180px;
        color: #48c2c5;
        margin: 0;
      }

      & .textsSubTitle {
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
      }
      & .textsContents {
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
        line-height: 50px;
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1900px) {
    transform: scale(0.5);
    /* 컴포넌트를 절반 크기로 축소 */
    transform-origin: top left;

    width: 50%;
    max-width: 960px;
    /* background-color: skyblue; */

    & img {
      width: 247px;
      height: 286px;
      position: absolute;
      left: 466px;
      top: -79px;
      /* margin-right: 186px; */
      margin-right: 213px;
      margin-top: -35px;
    }
    & .textsBoxContainer {
      /* margin-top: 260px;
      margin-left: 106px; */

      margin-top: 13.54vw;
      margin-left: 15.52vw;
      /* background-color: aqua; */

      &.marginLeft182 {
        /* background-color: yellowgreen; */
        margin-left: 182px;
      }

      & .textsTitle {
        font-size: 180px;
        color: #48c2c5;
        margin: 0;
      }

      & .textsSubTitle {
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
        white-space: nowrap;
      }
      & .textsContents {
        white-space: nowrap;
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
        line-height: 50px;
      }
    }
  }
  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    .textsBoxContainer {
      margin: 0 auto;
      /* padding-top: 24px;
      padding-bottom: 80px; */

      padding-top: 6.4vw;
      padding-bottom: 21.33vw;

      .textsTitle {
        /* font-size: 40px; */
        font-size: 10.67vw;
        text-align: left;
        color: #48c2c5;
      }
      .textsSubTitle {
        color: #48c2c5;
        /* font-size: 20px; */
        font-size: 5.33vw;
        text-align: left;

        /* margin-top: 4px; */
        margin-top: 1.07vw;
        /* margin-bottom: 20px; */
        margin-bottom: 5.33vw;
      }
      .textsContents {
        color: #767676;
        /* font-size: 16px; */
        font-size: 4.27vw;
        /* line-height: 24px; */
        line-height: 6.4vw;
        letter-spacing: -0.02em;
        text-align: left;
      }
    }
  }
`;

const AboutDescription = (data) => {
  const isMobile = useMobile();
  const [valueBox, setValueBox] = useState('');

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (data.textsTitle === 'VALUE' && window.innerWidth > 1025) {
      setValueBox('marginLeft182');
    } else {
      setValueBox('');
    }
  }, [data.textsTitle]);
  return (
    <StyledAboutDescription>
      {data.img && <img src={data && data.img} alt="" />}
      <div className={`textsBoxContainer ${valueBox}`}>
        <p className="textsTitle">{data && data.textsTitle}</p>
        <p className="textsSubTitle">{data && data.textsSubTitle}</p>
        <p className="textsContents">
          {renderTextWithLineBreaks(
            isMobile ? data.mobile_textsContents : data && data.textsContents
          )}
        </p>
      </div>
    </StyledAboutDescription>
  );
};

export default AboutDescription;
