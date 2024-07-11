import React, { useEffect, useState } from 'react';
import { AboutDescriptionBox1 } from '../../assets/styles/main/about.styled';

const AboutDescription1 = (data) => {
  const [valueBox, setValueBox] = useState('');

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (data.textsTitle == 'VALUE' && window.innerWidth > 1025) {
      setValueBox('marginLeft182');
    } else {
      setValueBox('');
    }
  });
  return (
    <AboutDescriptionBox1>
      {data.img && <img src={data && data.img} alt="" />}
      <div className={`textsBoxContainer ${valueBox}`}>
        <p className="textsTitle">{data && data.textsTitle}</p>
        <p className="textsSubTitle">{data && data.textsSubTitle}</p>
        <p className="textsContents">
          {/* {renderTextWithLineBreaks(data && data.textsContents)} */}
          {valueBox == 'marginLeft182'
            ? renderTextWithLineBreaks(
                `새로운 교육 기술 트렌드를 연구하고 적용하고,\n 성과와 필요에 맞춘 맞춤형 피드백 제공합니다.\n 열린 소통을 통해 협력적인 업무 환경 조성하여\n 시공간을 뛰어넘은 소통 학습을 체험할 수\n 있습니다.`
              )
            : renderTextWithLineBreaks(`${data.textsContents}`)}
        </p>
      </div>
    </AboutDescriptionBox1>
  );
};

export default AboutDescription1;
