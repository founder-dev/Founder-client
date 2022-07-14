import styled from 'styled-components'
import MainBanner from '../../assets/MainPageAssets/MainBanner.png';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil';
import {color, fontsize,fontWeight} from '../../lib/theme';
import { Link } from 'react-router-dom';
import KaKaoCode from '../KakaoCode';

const Banner = () => {

    const isLoggedIn = useRecoilValue(loginState);

    return(
        <>
        <BannerImage src={MainBanner}/>
        {
        isLoggedIn ? 
        <>
        <Link to={`/surveyintropage`}>
        <Button>설문조사에 참여하기</Button>
        </Link>
        </>
        :
        <>
        <Button onClick={KaKaoCode}>로그인 하러 가기</Button>
        </>
        }
        </>
    )
}

export default Banner;

const BannerImage = styled.img`
  width: 1440px;
  height: 322px;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  background: #272727;
  border: 1px solid #272727;
  border-radius: 4px;
  position: absolute;
  width: 283px;
  height: 52px;
  right: 650px;
  top: 391px;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  color: ${color.white};
  cursor : pointer;
`;