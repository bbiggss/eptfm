import React from 'react';
import { loading } from '../../assets/images';
import styled from 'styled-components';

const LoadingTag = styled.div`
  width: 100%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  & img {
    border-radius: 100%;
    height: 150px;
  }
`;

const Loading = () => {
  return (
    <LoadingTag>
      <img src={loading} alt="" />
    </LoadingTag>
  );
};

export default Loading;
