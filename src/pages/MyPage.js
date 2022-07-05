import TopBar from '../components/TopBar';
import PageTitleBar from '../components/PageTitleBar';
import styled from 'styled-components';
import { useState } from 'react';
import Founder from '../assets/MyPageAssets/FounderImage.png';
import Illust from '../assets/MyPageAssets/Login.png';
import Kakaologin from '../assets/MyPageAssets/kakaologin.png';
import KaKaoCode from '../components/KakaoCode';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';

const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
  width: 1440px;
  justify-content: space-between;
  padding-top : 150px;
  
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left : 480px;
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;

  padding-top: 67px;
  text-align : center;
`;

const MyName = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  padding-bottom : 40px;
  display: flex;
  padding-top : 66px;

`;

const Border = styled.div`
   border: 0.5px solid #222222;
   width : 480px;
`

const Info = styled.div`
   display : flex;
   flex-direction : row;
   margin-bottom : 8px;

`;
const Id = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;

  width : ${props => props.width || '52px'};
  margin-right : 52px;

`;

const MyId = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

`;

const Button = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #000000;
  border-radius: 4px;
  background-color : white;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-top : 132px;
  width : 480px;
  height : 60px;

  cursor : pointer;

`;
const Logo = styled.img`
   width : 480px;
   margin-top : 30px;
`;

const Login = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
/* identical to box height, or 133% */

  display: flex;
  align-items: center;

  margin-top : 7px;
`;

const Illustration = styled.img`
  width : 248px;
  height : 230px;

  margin-left : 200px;
`;

const KaKaoButton = styled.button`
padding: 0;
width: 300px;
height: 44px;
line-height: 44px;
background-color : white;
border: 1px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: bold;
text-align: center;
cursor: pointer;
&:hover{
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
}
margin-top : 184px;
margin-left : 70px;
`;

const MyPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState); //recoil 적용
    const [username , setUsername] = useState("Username");
    const [id, setId] = useState("UserId");
    const [gender, setGender] = useState("Men");
    const [email, setEmail] = useState("MyEmail@.com");
    
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
          <MyId>{gender}</MyId>
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