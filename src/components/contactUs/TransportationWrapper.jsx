import React from 'react';
import styled from 'styled-components';

const StyledTransportationWrapper = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    margin-right: ${(props) => {
      if (props.$pcMarginRight) return 'var(--pc-120px)';
    }};
    .imgWrapper {
      text-align: center;
      flex-shrink: 0;
      margin-right: 10px;
      .subway {
        width: clamp(0px, 1.88vw, 36px);
      }
      .bus {
        width: var(--pc-50px);
      }
    }
    p {
      color: #767676;
      font-size: clamp(0px, 1.15vw, 22px);
      word-break: keep-all;

      margin-top: 5px;
      span {
        color: #292929;
      }
    }
    p:first-child {
      margin-right: 120px;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    .imgWrapper {
      width: clamp(26px, 6.93vw, 1000px);
      text-align: center;
      flex-shrink: 0;
      margin-right: var(--mobile-15px);
      .subway {
        margin-top: var(--mobile-5px);
        width: var(--mobile-20px);
      }
      .bus {
        margin-top: var(--mobile-5px);
        width: clamp(26px, 6.93vw, 1000px);
      }
    }
    p {
      color: #767676;
      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
      word-break: keep-all;
      span {
        color: #292929;
      }
    }
    margin-bottom: var(--mobile-10px);
  }
`;

const TransportationWrapper = (data) => {
  return <StyledTransportationWrapper $pcMarginRight={data.pcMarginRight}>{data.children}</StyledTransportationWrapper>;
};

export default TransportationWrapper;
