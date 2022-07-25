import styled from 'styled-components';
import LifeStyle from '../assets/SurveyAssets/LifeStyle.png';
import SurveyIntro from '../assets/SurveyAssets/SurveyIntro.png';
import { WidthWrapper } from '../components/WidthWrapper';
import { color, fontsize, fontWeight } from '../../src/lib/theme';
import { Link } from 'react-router-dom';

function SurveyIntroPage() {
  return (
    <WidthWrapper>
      <Wrapper>
        <Title src={LifeStyle} />
        <SurveyIntroImg src={SurveyIntro} />
        <Text>
          파운더는 개인의 선호도를 분석하여 <br />
          시중의 <BlueText>현물 구독 서비스</BlueText>들을 선별, 추천해드리고
          있어요
        </Text>
        <Text2>
          89가지 제품 중 가장 필요한 제품을 큐레이션 해드려요.
          <br />
          5분의 설문조사로 맞춤 서비스를 받아보세요.
        </Text2>
        <Link to={`/surveypage`}>
          <SurveyGo>지금 당장 검사하기</SurveyGo>
        </Link>
      </Wrapper>
    </WidthWrapper>
  );
}

export default SurveyIntroPage;

const Title = styled.img`
  margin: 46px 47px 0px 50px;
`;

const SurveyIntroImg = styled.img`
  margin: 36.3px 0px 195.77px 0px;
  width: 1394.15px;
  height: 640.23px;
`;
const Text = styled.div`
  width: 783px;
  height: 96px;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
`;

const Text2 = styled.div`
  width: 433px;
  height: 72px;

  padding-top: 25px;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  color: ${color.grey[7]};
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  align-items: center;
`;

const BlueText = styled.span`
  color: #007dfe;
`;

const SurveyGo = styled.button`
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;

  margin-top: 74px;
  margin-bottom: 240px;

  background: #383838;
  border-radius: 4px;

  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;

  color: ${color.white};
  font-family: 'Pretendard';
  cursor: pointer;
`;
