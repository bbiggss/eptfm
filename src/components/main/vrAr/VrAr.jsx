import React from 'react';
import { useParams } from 'react-router-dom';
import { VrArDetailBox } from '../../../assets/styles/main/vrAr/vrArDetail.styled';
import ProjectDescription from './ProjectDescription';
import ProjectImg from './ProjectImg';
import BtnBox from '../../common/button/BtnBox';

const VrAr = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <VrArDetailBox>
      <div className="container">
        <div className="portfolioTitle">
          <p className="NanumSquareB">한국교육학술정보원</p>
          <p className="NanumSquareEB">
            AR <span className="NanumSquareR">I</span> 미션! 생태계를 복원하라
          </p>
        </div>
        <div className="mainImg">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/1.png`}
            alt=""
          />
        </div>

        <div className="animationBox">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/eagle.png`}
            alt=""
          />
          <div>
            <p className="NanumSquareEB">늑대의 귀환, 자연의 균형을 되찾다</p>
            <p className="NanumSquareB">
              옐로스톤 국립공원에서 펼쳐지는 생태계 복원의 대서사시
              <br /> 자연의 아름다움을 다시 꽃피우세요!
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/animals.png`}
            alt=""
          />
        </div>

        <div className="projectContainer">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/2.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`이 프로젝트는 생태계 평형의 의미를 이해하고, 인간의\n 개입이 얼마나 큰 영향을 미치는지 생생하게 보여준답니\n다.  생태계 복원이 얼마나 어렵고, 동시에 얼마나 보람찬\n 일인지 깨닫을 수 있어요.\n미국 옐로스톤 국립공원에서 늑대의 귀환을 통해 생태계\n 복원의 중요성을 배워보세요!`}
          />
        </div>
        <div className="projectContainer">
          <ProjectDescription
            text={`책상 위에 펼쳐진 옐로스톤 국립공원과 호주 생태계를\n 증강현실(AR)로 만날 수 있어요. 다양한 생물을 풀어놓고,\n토끼 수를 조절하며 생태계 평형을 회복시켜 보세요.\n자연을 사랑하는 우리, 오늘은 가상 현실로도 그 사랑을\n실천해 보아요!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/3.png`}
          />
        </div>
        <div className="projectContainer">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/4.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`기존 생태계에서 생물이 멸종하여 평형이 깨진 상황을\n체험해보세요. 늑대가 사라진 후 황폐화 된 국립 공원\n생태계에 다시 늑대를 풀어놓고, 시간이 지나며 점차 \n회복되는 과정을 관찰할 수 있어요. \n‘늑대는 영웅이 될 수 있다!’ 라는 사실을 직접 체험해 \n볼 수 있답니다!`}
          />
        </div>
        <div className="projectContainer">
          <ProjectDescription
            text={`‘미션! 생태계를 복원하라’ 콘텐츠를 개발하면서 우리팀은\n실제 옐로스톤 프로젝트의 방대한 데이터를 분석하고 \n적용하는 데 많은 노력을 기울였어요. \n제작 과정은 도전적이었지만, 이를 통해 진정성 있는 교육\n 콘텐츠를 제공할 수 있게 되었죠. 열정과 헌신이 담긴 AR\n 교육 콘텐츠를 통해 자연의 복잡함과 아름다움을 이해해\n보세요.`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/5.png`}
          />
        </div>
        <div className="projectContainer">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/6.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`‘미션! 생태계를 복원하라’ 콘텐츠를 복습할 수 있는\n 퀴즈를 제공하고 있어요. 옐로스톤 국립 공원에서 \n생태계 평형이 회복된 과정을 ‘빈칸 채우기’ 활동을 \n통해 학습 내용을 되짚어 볼 수 있어요.`}
          />
        </div>
        <div className="projectContainer">
          <ProjectDescription
            text={`생태계 평행에 영향을 주는 자연적인 요인과 인위적인 \n요인을 분류하는 퀴즈로 자연 환경 파괴, 산업 발달에 따른\n 오염, 과도한 사냥 등으로 생물 다양성이 감소되어 환경 \n변화가 생태계의 평형에 영향을 주게 된다는 결론을 통해\n 더 깊이 있는 이해를 도모해요. `}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/미션! 생태계를 복원하라/7.png`}
          />
        </div>
      </div>
      <BtnBox />
    </VrArDetailBox>
  );
};

export default VrAr;
