import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import icon from '../assets/TopBarAssets/icon.png';
import whiteIcon from '../assets/TopBarAssets/whiteIcon.png';
import Modal from '../components/Modal';
import { loginState, surveyState } from '../recoil';

const TopBarButton = ({ color }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isSurveyDone, setIsSurveyDone] = useRecoilState(surveyState);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isLoggedIn === false && (
        <>
          <LoginButton
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <Text color={color}>로그인</Text>
          </LoginButton>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} type="SignUpModal" />
          )}
        </>
      )}

      {isLoggedIn === true && isSurveyDone === false && (
        <>
          <Link to={`/surveyintropage`}>
            <SurveyButton color={color}>
              <Text color={color}>설문조사 하러가기</Text>
            </SurveyButton>
          </Link>
          <Link to={`/mypage`}>
            <Image src={color ? whiteIcon : icon} />
          </Link>
        </>
      )}
      {isLoggedIn === true && isSurveyDone === true && (
        <>
          <Blank />
          <Image src={color ? whiteIcon : icon} />
        </>
      )}
    </>
  );
};
export default TopBarButton;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? 'rgba(0, 0, 0, 0)' : 'white')};
  border: 1px solid;
  border-color: ${(props) => props.color || 'black'};
  border-radius: 40px;
  width: 98px;
  height: 40px;
`;

const SurveyButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? 'rgba(0, 0, 0, 0)' : 'white')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color || 'black'};
  border-radius: 40px;
  width: 171px;
  height: 40px;
  margin-right: 24px;
  cursor: pointer;
`;

const Text = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: 14px;
  font-family: 'Pretendard';
`;

const Image = styled.img`
  margin-right: 24px;
  width: 32px;
  height: 32px;
`;
const Blank = styled.div`
  width: 171px;
  height: 40px;
  margin-right: 24px;
`;
