import React from 'react';

const Img = (data) => {
  return <img style={data && data.style} src={data && data.src} alt="" />;
};

export default Img;
