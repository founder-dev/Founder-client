import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import icon from '../assets/TopBarAssets/icon.png';
import Modal from '../components/Modal';
import { loginState, surveyState } from '../recoil';

const TopBarButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isSurveyDone, setIsSurveyDone] = useRecoilState(surveyState);
  const [modalOpen, setModalOpen] = useState(false);

  return (
  <>
  {
    isLoggedIn === false && 
    <>
      <LoginButton onClick={() => {
        setModalOpen(true);
      }}>
        <Text>로그인</Text>
      </LoginButton>
      {modalOpen && (
            <Modal setOpenModal={setModalOpen} type="SignUpModal" />
          )}
      </>
      }
    
 { isLoggedIn === true && isSurveyDone === false &&
      <>
      <Link to={`/surveypage`}>
      <SurveyButton>
        <Text>설문조사 하러가기</Text>
      </SurveyButton>
      </Link>
      <Link to={`/mypage`}>
      <Image src={icon} />
      </Link>
      </>
 }
 { isLoggedIn === true && isSurveyDone === true &&
     <Image src={icon} />
  }
  </>
);
}
export default TopBarButton;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 40px;
  width: 98px;
  height: 40px;
`;

const SurveyButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 40px;
  width: 171px;
  height: 40px;
  margin-right: 24px;
  cursor : pointer;
`;

const Text = styled.div`
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;

const Image = styled.img`
  margin-right: 24px;
  width : 32px;
  height : 32px;

`;
