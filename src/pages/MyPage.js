import TopBar from '../components/TopBarComponents/TopBar';
import PageTitleBar from '../components/TopBarComponents/PageTitleBar';
import styled from 'styled-components';
import { useState } from 'react';
import Founder from '../assets/MyPageAssets/FounderImage.png';
import Illust from '../assets/MyPageAssets/Login.png';
import Kakaologin from '../assets/MyPageAssets/kakaologin.png';
import KaKaoCode from '../components/KakaoCode';
import { GenderState, loginState } from '../recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { WidthWrapper, Wrapper, MyName, Info ,Id , MyId, Button , KaKaoButton , Logo} from '../components/MyPageComponents/MyPagePresenter';
import axios from "react";

const MyPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState); //recoil 적용
    const [username , setUsername] = useState("Username");
    const [id, setId] = useState("UserId");
    const gender = useRecoilValue(GenderState);
    const [email, setEmail] = useState("MyEmail@.com");
    console.log(gender);
    
    /*if(isLoggedIn === true){
      useEffect(() => {
        const fetchLogin = async () => {
          try {
            const response = await axios.get(
              'https://pounder/api/mypage/'
            );
            const userData = response.data;
            setUsername(userData.name);
            setId(userData.nickname);
            setEmail(userData.email);
          } catch (e) {
            console.log(e);
          }
        };
        fetchLogin();
      }, []); 
    }*/
    
    return(
      <>
        <TopBar/>
        <PageTitleBar title={'MyPage'}/>
        <WidthWrapper>
        <Wrapper>
          {isLoggedIn === true ?
          <>
          <MyName>{username}</MyName>
          <Info>
          <Id>아이디</Id>
          <MyId>{id}</MyId>
          </Info>
          <Info>
          <Id top = "16px">성별</Id>
          <MyId>{gender ? "여성" : "남성"}</MyId>
          </Info>
          <Info>
          <Id top = "16px">이메일</Id>
          <MyId>{email}</MyId>
          </Info>
          <Button>로그아웃</Button>
          
          </>
          :
          <>
            <MyName width ="468px">더 나은 서비스를 위해 가입하세요</MyName>
            <Id width = "433px">지금 로그인하고 파운더만의 설문조사에 참여하세요.</Id>
            <Id width = "433px">89가지 제품 중 가장 필요한 제품을 추천해드려요.</Id>
            <KaKaoButton onClick={KaKaoCode}><img src ={Kakaologin}/></KaKaoButton>
          </>
        }
        <Logo src ={Founder}/>
        </Wrapper>
        </WidthWrapper>
      </>
    )
} 


export default MyPage;