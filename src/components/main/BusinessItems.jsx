import React from 'react';

const BusinessItems = (data) => {
  return (
    <li>
      <p>{data && data.text}</p>
      <img src={data && data.img} alt="" />
    </li>
  );
};

export default BusinessItems;
