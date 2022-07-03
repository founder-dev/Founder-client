import TopBar from '../components/TopBar';
import PageTitleBar from '../components/PageTitleBar';
import styled from 'styled-components';
import { useState } from 'react';
import Founder from '../assets/MyPageAssets/FounderImage.png';
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
  padding-left : 480px;
`;

const Name = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;

  padding-top: 67px;
  text-align : center;
  width: 1440px;
`;

const MyName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  padding-bottom : 29px;
  display: flex;

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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width : ${props => props.width || '42px'};
  padding-top : ${props => props.top || '37.25px'};

`;

const MyId = styled.span`
  font-family: 'Pretendard';
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

`
const Logo = styled.img`
   width : 480px;
   margin-top : 60px;
`

const MyPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); //recoil 적용
    const [username , setUsername] = useState("User");
    const [id, setId] = useState("UserId");
    const [gender, setGender] = useState("Men");

    return(
      <>
        <div>
        <TopBar/>
        <PageTitleBar title={'MyPage'}/>
        <WidthWrapper>
        <Wrapper>
          {isLoggedIn === true ?
          <>
          <Name>성함</Name>
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
          <Button>로그아웃</Button>
          <Logo src ={Founder}/>
          </>
          :
          <>
            <Id width ="200px">아직 파운더 회원이 아닌신가요?</Id>
          </>

        }
        </Wrapper>
        </WidthWrapper>
        </div>
        
      </>
    )
}

export default MyPage;