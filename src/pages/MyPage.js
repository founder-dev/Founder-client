import TopBar from '../components/TopBar';
import PageTitleBar from '../components/PageTitleBar';
import styled from 'styled-components';
import { useState } from 'react';
import Founder from '../assets/MyPageAssets/FounderImage.png';
import Illust from '../assets/MyPageAssets/Login.png';
import Kakaologin from '../assets/MyPageAssets/kakaologin.png';
import KaKaoCode from '../components/KakaoCode';

const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
  width: 1440px;
  justify-content: space-between;
  
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
  padding-bottom : 29px;
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

`;
const Id = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width : ${props => props.width || '42px'};
  padding-top : ${props => props.top || '37.25px'};
  margin-right : 200px;

`;

const MyId = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;

  padding-top : ${props => props.top || '33px'};
  padding-left : 42px;

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

  margin-top : 115px;
  width : 480px;
  height : 60px;

  cursor : pointer;

`;
const Logo = styled.img`
   width : 480px;
   margin-top : 60px;
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
margin-top : 23px;
margin-left : 70px;
`;

const MyPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); //recoil 적용
    const [username , setUsername] = useState("User");
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
          <Border/>
          <Info>
          <Id>아이디</Id>
          <MyId>{id}</MyId>
          </Info>
          <Info>
          <Id top = "16px">성별</Id>
          <MyId top = "8px">{gender}</MyId>
          </Info>
          <Info>
          <Id top = "16px">이메일</Id>
          <MyId top = "8px">{email}</MyId>
          </Info>
          <Button>로그아웃</Button>
          
          </>
          :
          <>
            <Id width ="200px">아직 파운더 회원이 아닌신가요?</Id>
            <Login>로그인 하기</Login>
            <Illustration src ={Illust}/>
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