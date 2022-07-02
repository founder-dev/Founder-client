import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '../assets/TopBarAssets/icon.png';

const TopBarButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSurveyDone, setIsSurveyDone] = useState(false);

  if (isLoggedIn === false) {
    return (
      <LoginButton>
        <Text>로그인</Text>
      </LoginButton>
    );
  }
  if (isLoggedIn === true && isSurveyDone === false) {
    return (
      <SurveyButton>
        <Text>설문조사 하러가기</Text>
        <Image src={icon} />
      </SurveyButton>
    );
  }
  if (isLoggedIn === true && isSurveyDone === true) {
    return <Image src={icon} />;
  }
};

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
`;

const Text = styled.div`
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;

const Image = styled.img`
  margin-right: 52px;
`;
