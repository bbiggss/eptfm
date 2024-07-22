import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';
import { WidthImg1Texts1 } from '../../../../assets/styles/portfolio/common/widthImg1Texts1.styled';
import ProjectDescription from '../../common/ProjectDescription';

const MayorBox = styled.div`
  .AC9EFF {
    background-color: rgba(172, 158, 255, 0.2);
    margin-bottom: 160px;
  }
  .mainContainer {
    margin-top: 80px;
    margin-bottom: 160px;

    display: flex;
    justify-content: space-between;
    height: 560px;

    .mainTexts {
      display: flex;
      align-items: center;
    }
  }

  .introduction {
    position: relative;
    width: 100%;
    height: 350px;
    background-color: #2c427a;
    margin-bottom: 160px;
    img {
      position: absolute;
      bottom: 0;
      left: 294px;
    }

    .subTexts p {
      padding-top: 99px;
      padding-left: 892px;
      color: #ffffff;
      font-size: 24px;
      line-height: 38px;
      letter-spacing: -2%;
    }
  }

  .subTexts {
    color: #292929;
  }

  .fourElement {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, auto);
    gap: 122px;
    padding: 0;
    margin-bottom: 160px;

    li {
      list-style: none;
      text-align: center;
      img {
        margin-bottom: 24px;
      }
    }
  }
`;

const Mayor = () => {
  return (
    <MayorBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'VR'}
        title={'직접 만드는 민주적인 선거! 시장 출마하기'}
      />
      <div className="smallScreen">
        <div className="mainContainer">
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'민주주의의 꽃, 시장 선거 체험!'}
              description={
                '시장의 선거 과정에 출마하여 정당 가입부터 선거일까지 체험해보세요.\n청소년도 참여 가능한 정당 활동과 투표 방법을 배울 수 있습니다.'
              }
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/main1.png`}
            alt=""
          />
        </div>
      </div>
      <div className="fullScreen">
        <div className="introduction">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/main2.png`}
            alt=""
          />
          <div className="subTexts NanumSquareB">
            <p>
              '직접 만드는 민주적인 선거! 시장 출마하기'를 제작하면서, 우리 팀은
              <br />
              가상 선거 운동을 하며 자칭 '최고의 후보'가 되기 위해 열띤 토론을 벌였죠. <br />
              여러분도 시장 선거에 도전해보세요. 민주주의의 과정을 직접 체험할 수 <br />
              있습니다!
            </p>
          </div>
        </div>
      </div>

      <div className="smallScreen">
        <ul className="fourElement">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group1_1.png`}
              alt=""
            />
            <p>거리  유세하기</p>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group1_1.png`}
              alt=""
            />
            <p>거리  유세하기</p>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group1_1.png`}
              alt=""
            />
            <p>거리  유세하기</p>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group1_1.png`}
              alt=""
            />
            <p>거리  유세하기</p>
          </li>
        </ul>
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_1.png`}
        />
        <TextCenter
          text={
            '“직접 만드는 민주적인 선거! 시장출마하기” 콘텐츠를 제작하기 위해\n우리팀은 방대한 선거 자료들을 조사하느라 밤을 세웠답니다.\nVR 기술을 활용해 생생한 체험을 제공하며, 교육적인 요소를 강화하려고 많은 노력을 했어요.\n다양한 연령대의 학습자가 재미있고 쉽게 이해할 수 있도록 인터랙티브 요소를 추가했답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_2.png`}
        />
        <TextCenter
          text={
            '선거과정을 한눈에 살펴보고 각각의 과정에 대해 자세히 학습하고 선거의 중요성을 깨달을 수 있어요.\n 후보자, 정당 그리고 유권자가 각각의 선거 과정에서 어떤 역할을 하는지 알아볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_3.png`}
        />
        <TextCenter
          text={
            '학습자들은 시장 후보로서 지킬 공약을 선택하고, 이를 통해 유권자들에게 지지를 호소할 수 있어요.\n공약은 단순한 약속이 아닙니다. 유권자들의 꿈을 현실로 만드는 설계도 입니다.\n꿈이 큰 만큼 공약도 멋지게 선택해보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_4.png`}
        />
        <TextCenter
          text={
            '학습자들의 이름을 넣은 선거 포스터를 만들어볼 수 있어요!\n정말 후보자가 된 기분, 마치 슈퍼스타가 된 느낌이죠?'
          }
        />
      </WidthOneContent>

      <div className="fullScreen AC9EFF">
        <div className="smallScreen">
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group3_1.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`잠깐! 잘 생각하고 선택해야해요!\n학습자들의 선택에 따라서\n유권자 박탈 여부도 결정된답니다.`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`학습자들이 어떤 공약을 선택하느냐에 따라\n NPC들의 반응이 달라요.\n다양한 유권자들을 만나며 자신의 공약을\n어필해보세요!`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group3_2.png`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group3_3.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`거리로 나가서 지지자들과 함께\n현란한 선거운동도 할 수 있답니다! \n나의 공약을 외치며 유권자들의 마음을\n사로잡아보세요.`}
            />
          </WidthImg1Texts1>
          <WidthImg1Texts1>
            <ProjectDescription
              text={`간혹 엉뚱한 선거 운동을 선택하게 되면\n지지율이 떨어질 수 있으니 유의해야해요!\n어떤 선거 운동이 지지율 상승에 도움이 될지\n많은 고민을 해야한답니다!`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group3_4.png`}
            />
          </WidthImg1Texts1>
        </div>
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_5.png`}
        />
        <TextCenter
          text={
            '다양한 선거운동을 통해 유권자들에게 지지를 호소할 수 있어요.\n거리 유세, SNS 활용 뿐만 아니라 TV에서 토론회를 할 수도 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_6.png`}
        />
        <TextCenter
          text={
            '선거일에 투표소에서 기표하는 방법을 직접 체험해 볼 수 있어요.\n투표소에서 한 표 한 표가 모여 결과를 만든답니다. 잊지 않고 무효표가 되는 경우도 확인해보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent className="lastChild">
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/Mayor/group2_7.png`}
        />
        <TextCenter
          text={
            '개표 결과에 따라 당락이 결정되요. 당선되면 기쁨을 만끽하고, 낙선되면 다음 기회를 준비하게 된답니다.\n당선의 기쁨은 이루 말할 수 없죠! 그러나 낙선해도 괜찮아요. 학습자들은 이미 훌륭한 경험을 쌓았으니까요!'
          }
        />
      </WidthOneContent>
      <FixedButton />
    </MayorBox>
  );
};

export default Mayor;
