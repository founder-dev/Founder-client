import TopBar from '../components/TopBar';
import PageTitleBar from '../components/PageTitleBar';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
  width: 1440px;
  justify-content: space-between;
  padding-left : 480px;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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

  display: flex;
  padding: 7px;

`;

const Border = styled.div`
   border: 1px solid #222222;
   width : 480px;
`

const Id = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  padding-top : 37.25px;

`
const MyPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); //recoil 적용
    const [username , setUsername] = useState("User");
    const [id, setId] = useState("UserId");
    const [gender, setGender] = useState("Men");

    return(
        <div>
        <TopBar/>
        <PageTitleBar title={'MyPage'}/>
        {isLoggedIn === true &&
        <WidthWrapper>
        <Wrapper>
        <Name>성함</Name>
        <MyName>{username}</MyName>
        <Border/>
        <Id>아이디</Id>
        </Wrapper>
        </WidthWrapper>
        }
        </div>
    )
}

export default MyPage;