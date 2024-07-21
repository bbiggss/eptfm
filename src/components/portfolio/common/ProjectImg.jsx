import React from 'react';

const ProjectImg = (data) => {
  return (
    <>
      <img className="projectImg" src={data && data.src} alt="" />
    </>
  );
};

export default ProjectImg;
