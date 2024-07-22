import React from 'react';
import { BreadcrumbBox } from '../../../assets/styles/common/breadcrumb.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  let contentTitleEnglish = '';
  let contentTitleKorean = '';
  // console.log(111, location.pathname);
  // console.log(location.pathname.split('/'));

  let mainCategory = location.pathname.split('/')[1];
  let subCategory = location.pathname.split('/')[2];

  if (mainCategory === 'portfolio') {
    mainCategory = 'PORTFOLIO';
  } else if (mainCategory === 'contactUs') {
    mainCategory = 'CONTACT US';
  } else if (mainCategory === 'business') {
    mainCategory = 'BUSINESS';
  } else if (mainCategory === 'about') {
    mainCategory = 'ABOUT';
  }

  if (subCategory === 'VrAr') {
    subCategory = 'VR/AR';
  }
  const contentTitle = decodeURIComponent(location.pathname.split('/')[3]);
  if (contentTitle.includes('|')) {
    contentTitleEnglish = contentTitle.split('|')[0];
    contentTitleKorean = contentTitle.split('|')[1];
  }
  //만약 | 가 있으면 | 를 기준으로 두개로 나눠서 왼쪽은  a폰트, 오른쪽은 b폰트
  // 한글

  // console.log(mainCategory, subCategory, contentTitle);
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

        {contentTitle === undefined || contentTitle === 'undefined' ? (
          ''
        ) : (
          <>
            <li>{'>'}</li>

            <li className="NanumSquareB">
              {contentTitle.includes('|') ? (
                <>
                  {contentTitleEnglish}
                  <span className="NanumSquareR">|</span>
                  {contentTitleKorean}
                </>
              ) : (
                <>{contentTitle}</>
              )}
            </li>
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
