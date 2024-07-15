import React from 'react';
import { BreadcrumbBox } from '../../../assets/styles/common/breadcrumb.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  console.log(111, location.pathname);
  console.log(location.pathname.split('/'));

  let mainCategory = location.pathname.split('/')[1];
  let subCategory = location.pathname.split('/')[2];

  if (mainCategory === 'portfolio') {
    mainCategory = 'PORTFOLIO';
  } else if (mainCategory === 'contactUs') {
    mainCategory = 'CONTACT US';
  }
  if (subCategory === 'VrAr') {
    subCategory = 'VR/AR';
  }
  const contentTitle = location.pathname.split('/')[3];

  console.log(mainCategory, subCategory, contentTitle);
  return (
    <BreadcrumbBox className="robotoMedium">
      <ul>
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>{'>'}</li>
        <li>{mainCategory}</li>

        {subCategory === undefined ? (
          ''
        ) : (
          <>
            <li>{'>'}</li>
            <li>
              <Link to={`/portfolio/${subCategory === 'VR/AR' ? 'VrAr' : subCategory}`}>
                {subCategory}
              </Link>
            </li>
          </>
        )}

        {contentTitle === undefined ? (
          ''
        ) : (
          <>
            <li>{'>'}</li>
            <li>{contentTitle}</li>
          </>
        )}
      </ul>

      {/* <ol class="breadcrumb breadcrumb-style2 mb-0">
        <li class="breadcrumb-item">
          <Link to={'/'}>HOME</Link>
        </li>
        <li class="breadcrumb-item">
          <a>{{ title }}</a>
        </li>
        <li class="breadcrumb-item active">{{ subTitle }}</li>
      </ol> */}
    </BreadcrumbBox>
  );
};

export default Breadcrumb;
