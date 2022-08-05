import TopBar from '../components/TopBarComponents/TopBar';
import PageTitleBar from '../components/TopBarComponents/PageTitleBar';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Founder from '../assets/MyPageAssets/FounderImage.png';
import Kakaologin from '../assets/MyPageAssets/kakaologin.png';
import { GenderState, loginState } from '../recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  WidthWrapper,
  Wrapper,
  MyName,
  Info,
  Id,
  MyId,
  Button,
  KaKaoButton,
  Logo,
} from '../components/MyPageComponents/MyPagePresenter';
import { fetchUserInfo } from '../API';
import { KAKAO_AUTH_URL } from '../components/SharedComponents/KaKaoAuth';
import axios from 'axios';

const MyPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState); //recoil 적용
  const [username, setUsername] = useState('Username');
  const [id, setId] = useState('UserId');
  const gender = useRecoilValue(GenderState);
  const [email, setEmail] = useState('MyEmail@.com');
  const access = localStorage.getItem('accesstoken');
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    fetchUserInfo({ setuserData, access });
  }, [access]);

  if (!userData) return null;

  const Logout = () => {
    //카카오 로그아웃
    axios
      .post('https://kapi.kakao.com/v1/user/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.kakaotoken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log(response);
        console.log('카카오 로그아웃 완료');
      })

      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log('카카오 로그아웃 실패');
      });

    //REST API 로그아웃
    axios
      .post('https://found-er.co.kr/api/user/signout', {
        headers: {
          Authorization: `Bearer ${localStorage.accesstoken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        setIsLoggedIn(false);
        localStorage.clear();
        console.log('로그아웃 완료');
      })

      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log('로그아웃 실패');
      });
  };

  return (
    <>
      <TopBar />
      <PageTitleBar title={'MyPage'} />
      <WidthWrapper>
        <Wrapper>
          {isLoggedIn === true ? (
            <>
              <MyName>{userData.nickname}</MyName>
              <Info>
                <Id top="16px">성별</Id>
                <MyId>{gender ? '여성' : '남성'}</MyId>
              </Info>
              <Info>
                <Id top="16px">이메일</Id>
                <MyId>{userData.email}</MyId>
              </Info>
              <Button type="button" onClick={() => Logout()}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <MyName width="468px">더 나은 서비스를 위해 가입하세요</MyName>
              <Id width="433px">
                지금 로그인하고 파운더만의 설문조사에 참여하세요.
              </Id>
              <Id width="433px">
                89가지 제품 중 가장 필요한 제품을 추천해드려요.
              </Id>
              <a href={KAKAO_AUTH_URL}>
                <KaKaoButton>
                  <img src={Kakaologin} />
                </KaKaoButton>
              </a>
            </>
          )}
          <Logo src={Founder} />
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MyPage;
