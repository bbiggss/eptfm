import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import ProjectDescription from '../../common/ProjectDescription';
import ProjectImg from '../../common/ProjectImg';
import { WidthImg1Texts1 } from '../../../../assets/styles/portfolio/common/widthImg1Texts1.styled';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import styled from 'styled-components';

const ExploreDokdoBox = styled.div`
  .mainImg {
    position: relative;
    height: 1137px;
    overflow: hidden;
    img:first-child {
      position: absolute;
    }
    img:last-child {
      position: absolute;
      margin-right: 110px;
      bottom: 0;
      right: 0;
    }
  }
  .marginBottom160 {
    margin-bottom: 160px;
  }
`;

const ExploreDokdo = () => {
  return (
    <>
      <Breadcrumb />
      <ExploreDokdoBox>
        <PortfolioTitle
          organization={'한국교육학술정보원'}
          field={'VR'}
          title={'우리 땅, 독도 탐험하기'}
        />
        <div className="fullScreen">
          <div className="mainImg">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/main.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/main2.png`}
              alt=""
            />
          </div>
        </div>
        <div className="smallScreen">
          <div className="marginBottom160">
            <PortfolioIntroduction
              title={'하늘과 바다를 넘나드는 모험!'}
              description={
                '드론을 조정해 3D 모델링된 독도를 자유롭게 탐험할 수 있어요.\n독도의 멋진 지형과 바다 속 모습을 관찰하며, 독도의 가치를 이해하고 친근하게 느껴보세요!'
              }
            />
          </div>
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/1.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`‘우리 땅, 독도 탐험하기’ 콘텐츠는 독도의 \n지리적 환경과 자연환경은 VR을 통해 실감나게 \n탐험할 수 있는 기회를 제공해요. 드론을 \n조종하며 자유롭게 독도를 탐험하는 과정에서\n 독도의 가치와 중요성을 재미있고 생동감 있게\n 학습할 수 있답니다!`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`이 콘텐츠를 개발하면서 우리 팀은 독도의 \n아름다움을 최대한 생생하게 전달하기 위해 \n많은 노력을 기울였어요. 팀원들은 드론 조종 \n전문가가 되기 위해 수많은 시뮬레이션을 \n돌리며, 실제 독도의 데이터를 기반으로 3D \n모델링을 정교하게 작업했답니다.`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/2.png`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/3.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`모델링된 독도에서 독도의 지리적 환경 지명과\n 자연환경을 학습할 수 있어요. \n주요 지명을 찾아가며 그 유래와 독도의 특성을\n 확인할 수 있답니다!`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`독도의 경관을 체험하며 독도의 자연적 \n아름다움을 느끼고, 이 아름다움이 단지 관광 \n자원으로서가 아니라 소중한 국토로서의 \n가치를 지닌다는 것을 이해할 수 있어요.`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/4.png`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/5.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`독도 주변의 바닷속 환경을 360도 영상으로 \n확인하여 독도의 소중한 해양 생태계도 살펴볼\n 수 있답니다!`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`독도의 해양 싱태계와 육상 생태계를 탐험하면\n서, 자연환경을 보존하는 것이 왜 중요한지를\n 깨달을 수 있어요. 독도의 다양한 생물종과 \n그들의 생태적 역할을 이해함으로써 생태계의\n 균형을 유지하는 중요성 또한 배울 수 있어요.`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/6.png`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/7.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`독도의 지리적 위치가 경제적으로 어떤 이점을\n 가지고 있는지, 어업이나 해양 자원 탐사에서 \n어떤 중요성을 지니는지에 대해 알 수 있어요.`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`드론을 조종하여 3D로 정밀하게 모델링된 독\n도를 자유롭게 탐험하며 살펴보세요!\n“독도를 이렇게 생생하게 느끼다니, 마치 독도\n로 휴가를 다녀온 기분이에요!” 라는 말을\n 할 수 있게 된답니다!`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/8.png`}
            />
          </WidthImg1Texts1>
        </div>
      </ExploreDokdoBox>
      <FixedButton />
    </>
  );
};

export default ExploreDokdo;
