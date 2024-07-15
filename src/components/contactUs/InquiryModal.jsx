import React from 'react';
import { ContactUsModalBox } from '../../assets/styles/contactUs/contactUsModal.styled';

const InquiryModal = ({ setModalStatus }) => {
  return (
    <ContactUsModalBox>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div>
          <span className="NanumSquareEB">문의하기</span>
          <img
            onClick={() => setModalStatus(false)}
            src={`${process.env.PUBLIC_URL}/assets/images/contact/Group 32.png`}
            alt=""
          />
          <hr />
          <p>123123</p>
        </div>
      </div>
    </ContactUsModalBox>
  );
};

export default InquiryModal;
