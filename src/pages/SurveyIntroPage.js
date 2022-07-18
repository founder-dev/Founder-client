import styled from "styled-components";
import LifeStyle from '../assets/SurveyAssets/LifeStyle.png';
import { WidthWrapper } from "../components/WidthWrapper";
import Founder from "../assets/SharedAssets/Founder.png";
import Custom from '../assets/ProductCardAssets/customSticker3.png';
import Sticker from '../assets/ProductCardAssets/sticker.png';
import Custom2 from '../assets/ProductCardAssets/customSticker2.png';
import FounderModel from '../assets/SignUpAssets/FounderModel.png';
import {color,fontsize, fontWeight} from '../../src/lib/theme';
import { Link } from "react-router-dom";

function SurveyIntroPage(){
    return(
        <Wrapper>
            <WidthWrapper>
                <Title src={LifeStyle}/>
                <Logo src={Founder}/>
                <Item src={Custom2}/>
                <Item2 src={Sticker}/>
                <Item top ="350px" left ="350px" z="3" src={Custom2}/>
                <Item2 top ="345px" left ="465px" src={Sticker}/>
                <Item top ="688px" left ="688px" src={Custom}/>
                <Item3 src={FounderModel}/>
                <Item2 top ="170px" left ="1250px" src={Sticker}/>
                <Text>파운더는 개인의 선호도를 분석하여</Text>
                <Text padding={"44px"}>시중의 <BlueText>현물 구독 서비스</BlueText>들을 선별, 추천해드리고 있어요</Text>
                <Text2>89가지 제품 중에서 가장 필요한 제품을 큐레이션 해드려요.</Text2>
                <Text2 padding={"40px"}>5분의 설문조사로 맞춤 서비스를 받아보세요. </Text2>
                <Link to={`/surveypage`}>
                <SurveyGo>지금 당장 검사하기</SurveyGo>
                </Link>
                <Gap>gap</Gap>
            </WidthWrapper>
            </Wrapper>
        
    )
}

export default SurveyIntroPage;

const Title = styled.img`
  position: absolute;
  width: 1343px;
 height: 90px;
  left: 50px;
  top: 46px;

`;

const Logo = styled.img`
  position: absolute;
  width: 399.65px;
  height: 65px;
  left: 50.3px;
  top: 172.3px;
`;

const Item = styled.img`
  position: absolute;
  height: 62.11px;
  left: ${(props)=>(props.left)|| "112px"};
  top: ${(props)=>(props.top)|| "660px"};
  transform : scale(1.6);
  z-index: ${(props)=>(props.z) || 1};

`;

const Item2 = styled.img`
  position: absolute;
  width: 175.99px;
  height: 175.99px;
  left: ${(props)=>(props.left)|| "27px"};
  top: ${(props)=>(props.top)|| "513.55px"};
  z-index:2;
`;

const Item3 = styled.img`
  position: absolute;
  width: 551.1px;
  height: 511.34px;
  left: 830px;
  top: 200px;
  transform : scale(1.2);
`;
const Text = styled.div`
  position: absolute;
  width : 800px;
  height: 96px;
  left: 328.5px;
  top: 992px;
  padding-top: ${(props)=>(props.padding) || "0px"};
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;

  text-align: center;

`;

const Text2 = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 480px;
  top: 1113px;
  padding-top: ${(props)=>(props.padding) || "0px"};
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  color : ${color.grey[7]};
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
  position : relative;
`;

const BlueText = styled.span`
  color :  #007DFE;
`;

const SurveyGo = styled.button`
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;

  position: absolute;
  width: 480px;
  height: 68px;
  left: 500px;
  top: 1259px;

  background: #383838;
  border-radius: 4px;

  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;

  color : ${color.white};
  font-family: 'Pretendard';
  cursor : pointer;
`;

const Gap = styled.div`
  position : absolute;
  left: 500px;
  top: 1600px;
  color : white;
`;