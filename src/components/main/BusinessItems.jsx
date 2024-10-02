import React from 'react';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
import { StyledBusinessItems } from '../../assets/styles/main/businessItems.styled';

const BusinessItems = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const isMobile = useResponsiveMax1024();
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
