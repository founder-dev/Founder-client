import { useState } from "react";
import KakaoLoginHandler from "./KaKaoLoginHandlerPage";
import LoginPage from "./LoginPage";
import {Routes,Route} from 'react-router-dom';

function App() {

  /*function kakaoLogin() {
    window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function(response) {
          console.log("accesstoken: "+ response.access_token);
          console.log("refreshtoken: "+response.refresh_token);

            localStorage.setItem('accesstoken',(response.access_token));  // 로그인 성공하면 사용자 엑세스 토큰 로컬Storage에 저장
            
            window.Kakao.API.request({ // 사용자 정보 가져오기 
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                    console.log(kakao_account.profile.nickname);
                    console.log(`${(kakao_account.email)[0]}*****`);
                    console.log(`${(kakao_account.gender)}`); //이메일에서 아이디만 뽑아오기
                    alert('로그인 성공');
                }
            });
        },
        fail: function(error) {
            console.log(error);
        }
    });
};

function kakaoLogout() {
  if (!window.Kakao.Auth.getAccessToken()) { //이미 로그인이 되어있는 상태
      console.log('Not logged in.');
      return;
  }
  window.Kakao.Auth.logout(function(response) {
      alert("로그아웃을 성공했습니다.");
      window.location.href='/'
  });
};

function secession() {
  window.Kakao.API.request({
      url: '/v1/user/unlink',
      
      success: function(response) {
          console.log(response);
          //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
          window.location.href='/'
      },
      fail: function(error) {
          console.log('탈퇴 미완료')
          console.log(error);
      },
  });
};

*/ //프론트 내에서만 카카오 로그인을 구현하고 싶을때

  return (
    <>
    <Routes>
    <Route path="/" element ={<LoginPage/>}></Route>
    <Route path="/kakao" element ={<KakaoLoginHandler/>}></Route>
    </Routes>
    </>
  );
}

/* 카카오 로그인 버튼 공식 디자인
const KakaoBtn=styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
*/
export default App;
