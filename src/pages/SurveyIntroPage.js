import LifeStyle from '../assets/SurveyAssets/LifeStyle.png';
import { WidthWrapper } from '../components/WidthWrapper';
import Founder from '../assets/SharedAssets/Founder.png';
import Custom from '../assets/SurveyAssets/Custom.png';
import Sticker from '../assets/SurveyAssets/Sticker.png';
import FounderModel from '../assets/SurveyAssets/FounderModel.png';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Title,
  LogoWrapper,
  Logo,
  CustomSticker,
  BlueSticker,
  Person,
  Text,
  Text2,
  BlueText,
  TextContainer,
  SurveyGo,
} from '../components/SurveyComponents/SurveyIntroPresenter.js';

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
