import React, { useState } from 'react';
import { ContactUsModalBox } from '../../assets/styles/contactUs/contactUsModal.styled';

const InquiryModal = ({ setModalStatus }) => {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  const inquiryClick = () => {
    alert('클릭됨');
  };
  return (
    <ContactUsModalBox>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="inquiryContainer">
          <p className="NanumSquareEB">문의하기</p>
          <img
            onClick={() => setModalStatus(false)}
            src={`${process.env.PUBLIC_URL}/assets/images/contact/Group 32.png`}
            alt=""
          />
          <hr />
          <div className="inquiryInfos NanumSquareB">
            <p>
              <span className="dot">·</span>&nbsp;이름/업체명
            </p>
            <input type="text" placeholder="이름/업체명을 입력해주세요." />
          </div>
          <div className="inquiryInfos NanumSquareB">
            <p>
              <span className="dot">·</span>&nbsp;연락처
            </p>
            <input type="text" placeholder="번호를 입력해주세요. ( ‘-’없이 입력 )" />
          </div>
          <div className="inquiryInfos NanumSquareB">
            <p>
              <span className="dot">·</span>&nbsp;이메일
            </p>
            <input type="text" placeholder="이메일을 입력해주세요." />
          </div>
          <div className="inquiryInfos inquiryContent NanumSquareB">
            <p>
              <span className="dot">·</span>&nbsp;문의내용
            </p>
            <textarea
              name=""
              id=""
              onChange={onInputHandler}
              placeholder="문의하실 내용을 입력해주세요."
            ></textarea>
            <span className="textLimit">{inputCount} / 500</span>
          </div>
          <div className="inquiryBtn">
            <button onClick={inquiryClick} className="NanumSquareB">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </ContactUsModalBox>
  );
};

export default InquiryModal;
