import React from 'react';
import styled from 'styled-components';

const ProjectImgBox = styled.div`
  .smallScreen {
    display: flex;
    margin-bottom: 60px;
  }
  img {
    border-radius: 30px;
  }
  img + img {
    margin-left: 40px;
  }
`;

const ProjectImg = (data) => {
  return (
    <ProjectImgBox>
      <div className="smallScreen">
        <img src={data && data.src1} alt="" />
        <img src={data && data.src2} alt="" />
      </div>
    </ProjectImgBox>
  );
};

export default ProjectImg;
