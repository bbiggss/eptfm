import React from 'react';
import styled from 'styled-components';

const BlankPage = () => {
  const BlankPageBox = styled.div`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: calc(100vh - 460px);
    }
  `;
  return (
    <BlankPageBox>
      <div>페이지를 찾을수 없습니다.</div>
    </BlankPageBox>
  );
};

export default BlankPage;
