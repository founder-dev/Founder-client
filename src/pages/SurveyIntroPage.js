import styled from 'styled-components';
import LifeStyle from '../assets/SurveyAssets/LifeStyle.png';
import { WidthWrapper } from '../components/WidthWrapper';
import Founder from '../assets/SharedAssets/Founder.png';
import Custom from '../assets/SurveyAssets/Custom.png';
import Sticker from '../assets/SurveyAssets/Sticker.png';
import FounderModel from '../assets/SurveyAssets/FounderModel.png';
import { color, fontsize, fontWeight } from '../../src/lib/theme';
import { Link } from 'react-router-dom';

function SurveyIntroPage() {
  return (
    <WidthWrapper>
      <Wrapper>
        <Title src={LifeStyle} />
        <LogoWrapper>
          <Logo src={Founder} />
        </LogoWrapper>
        <CustomSticker src={Custom} />
        <BlueSticker src={Sticker} rotate="rotate(-15deg)" />
        <CustomSticker top="364px" left="318px" z="3" src={Custom} />
        <BlueSticker top="355.22px" left="465.24px" src={Sticker} />
        <CustomSticker
          top="688px"
          left="688px"
          src={Custom}
          rotate="rotate(15deg)"
        />
        <Person src={FounderModel} />
        <BlueSticker top="166.6px" left="1205.61px" src={Sticker} />
        <TextContainer>
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
        </TextContainer>
      </Wrapper>
    </WidthWrapper>
  );
}

export default SurveyIntroPage;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Title = styled.img`
  width: 1343px;
  height: 90px;
  margin: 46px 47px 0px 50px;
`;

const Logo = styled.img`
  width: 399.65px;
  height: 65px;
`;

const LogoWrapper = styled.div`
  margin-top: 36.3px;
  width: 1343px;
  height: 65px;
`;

const CustomSticker = styled.img`
  position: absolute;
  width: 186.34px;
  height: 62.11px;
  left: ${(props) => props.left || '112px'};
  top: ${(props) => props.top || '610px'};
  z-index: ${(props) => props.z || 1};
  transform: ${(props) => props.rotate || 'rotate(-15deg)'}; ;
`;

const BlueSticker = styled.img`
  position: absolute;
  width: 175.99px;
  height: 175.99px;
  left: ${(props) => props.left || '27px'};
  top: ${(props) => props.top || '468px'};
  z-index: 2;
  transform: ${(props) => props.rotate || 'rotate(15deg)'}; ;
`;

const Person = styled.img`
  position: absolute;
  width: 684.67px;
  height: 656.55px;
  left: 717px;
  top: 146px;
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

const TextContainer = styled.div`
  width: 783px;
  height: 96px;
  margin-top: 754.7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
