import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import icon from '../../assets/TopBarAssets/icon.png';
import whiteIcon from '../../assets/TopBarAssets/whiteIcon.png';
import Modal from '../ModalComponents/Modal';
import { loginState, surveyState } from '../../recoil';

const TopBarButton = ({ color }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isSurveyDone, setIsSurveyDone] = useRecoilState(surveyState);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isLoggedIn === false && (
        <ButtonWrapper>
          <LoginButton
            color={color}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <Text color={color}>로그인</Text>
          </LoginButton>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} type="SignUpModal" />
          )}
          <Link to={`/mypage`}>
            <Image src={color ? whiteIcon : icon} />
          </Link>
        </ButtonWrapper>
      )}

      {isLoggedIn === true && isSurveyDone === false && (
        <ButtonWrapper>
          <Link to={`/surveyintropage`}>
            <SurveyButton color={color}>
              <Text color={color}>설문조사 하러가기</Text>
            </SurveyButton>
          </Link>
          <Link to={`/mypage`}>
            <Image src={color ? whiteIcon : icon} />
          </Link>
        </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  margin-right: 51px;
  display: flex;
`;
const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? 'rgba(0, 0, 0, 0)' : 'white')};
  border: 1px solid;
  border-color: ${(props) => props.color || 'black'};
  border-radius: 40px;
  width: 85px;
  height: 32px;
  margin-right: 1.5rem;
  cursor: pointer;
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
  width: 149px;
  height: 32px;
  margin-right: 1.5rem;
  cursor: pointer;
`;

const Text = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: 14px;
  font-family: 'Pretendard';
`;

const Image = styled.img`
  margin-right: 3.188rem;
  width: 32px;
  height: 32px;
`;
const Blank = styled.div`
  width: 171px;
  height: 40px;
  margin-right: 1.5rem;
`;
