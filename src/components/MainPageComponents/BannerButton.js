import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { loginState } from '../../recoil';
import { color, fontsize, fontWeight } from '../../styles/theme';
import { KAKAO_AUTH_URL } from '../SharedComponents/KaKaoAuth';

function BannerButton() {
  const isLoggedIn = useRecoilValue(loginState);
  
  return (
    <>
      {isLoggedIn ? (
        <>
          <Link to={`/surveyintropage`}>
            <Button>설문조사에 참여하기</Button>
          </Link>
        </>
      ) : (
        <>
          <a href={KAKAO_AUTH_URL}>
            <Button>로그인 하러 가기</Button>
          </a>
        </>
      )}
    </>
  );
}

export default BannerButton;

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
  top: 224px;

  background: #272727;
  border-radius: 4px;

  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  color: ${color.white};
  border: none;
  cursor: pointer;
`;
