import React from 'react';

const BusinessItems = (data) => {
  console.log(data);
  return (
    <li>
      <p>{data && data.text}</p>
      <img src={data && data.img} alt="" />
    </li>
  );
};

export default BusinessItems;
