import React from 'react';
import styled from 'styled-components';
import Close from '../assets/SignUpAssets/CloseButton.png';
import KaKaoLogin from '../assets/SignUpAssets/KaKaoLogin.png';
import Founder from '../assets/SignUpAssets/Founder.png';
import FounderModel from '../assets/SignUpAssets/FounderModel.png';
import LifeStyle from '../assets/SignUpAssets/LifeStyle.png';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  width:1000px;
  height:600px;
  position : relative;
`
const Thumbnail = styled.img`

position : absolute;
top : 52px;
left : 41.05px;

`
const Logo = styled.img`

position : absolute;
top : 134.69px;
left : 45.7px;
`
const Model = styled.img`

position : absolute;
right: 0.8px;
top: 0px;

`
const Text = styled.div`

position : absolute;
font-size : 24px;
top : 353px;
left : 49px;
font-family: 'Pretendard';
font-weight: medium;

`
const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  height: 600px;
  border-radius: 10px;
  background-color: white;
  width: 1000px;
  @media (max-width: 1120px) {
    width: 37.5rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position : absolute;
  top : 40.01px;
  right : 40px;
  border : 0;
  outline : 0;
  background-color : white;
  cursor : pointer;
`;

const LoginButton = styled.button`
  position : absolute;
  background-color : none;
  left : 48px;
  bottom : 136px;
`
const SignUpModal = ({ setOpenModal }) => {
  return (
    <Container>
      <Background/>
      <ModalBlock>
        <Wrapper>
        <Contents>
          <Thumbnail src ={LifeStyle}/>
          <Logo src ={Founder}/>
          <Model src ={FounderModel}/>
          <Text>로그인 혹은 회원가입</Text>
          <LoginButton>kakaoLogin</LoginButton>
          <CloseButton
            onClick={() => {
              setOpenModal(false);
            }}
          ><img src ={Close}/>
          </CloseButton>
        </Contents>
        </Wrapper>
      </ModalBlock>
    </Container>
  );
};

export default SignUpModal;
