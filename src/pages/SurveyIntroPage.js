import styled from "styled-components";
import LifeStyle from '../assets/SurveyAssets/LifeStyle.png';
import { WidthWrapper } from "../components/WidthWrapper";
import Founder from "../assets/SharedAssets/Founder.png";
import Custom from '../assets/ProductCardAssets/customSticker.png';
import Sticker from '../assets/ProductCardAssets/sticker.png';
import Custom2 from '../assets/ProductCardAssets/customSticker2.png';

function SurveyIntroPage(){
    return(
        <WidthWrapper>
            <Wrapper>
                <Title src={LifeStyle}/>
                <Logo src={Founder}/>
                <Item src={Custom2}/>
                <Item2 src={Sticker}/>
            </Wrapper>
        </WidthWrapper>

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
width: 186.34px;
height: 62.11px;
left: 112px;
top: 610px;

`;

const Item2 = styled.img`
position: absolute;
width: 175.99px;
height: 175.99px;
left: 27px;
top: 513.55px;
`
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
  position : relative;
`;