import styled from 'styled-components';
import MainBanner from '../../assets/MainPageAssets/MainBanner.png';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil';
import { color, fontsize, fontWeight } from '../../lib/theme';
import { Link } from 'react-router-dom';
import KaKaoCode from '../KakaoCode';

const Banner = () => {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <BannerWrapper>
      <BannerImage src={MainBanner} />
      {isLoggedIn ? (
        <>
          <Link to={`/surveyintropage`}>
            <Button>설문조사에 참여하기</Button>
          </Link>
        </>
      ) : (
        <>
          <Button onClick={KaKaoCode}>로그인 하러 가기</Button>
        </>
      )}
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  position: relative;
`;
const BannerImage = styled.img`
  width: 1441px;
  height: 280px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 12px;

  position: absolute;

  width: 283px;
  height: 52px;
  right: 578px;
  top: 191px;

  background: #007dfe;
  border-radius: 4px;

  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  color: ${color.white};
  border: none;
  cursor: pointer;
`;
