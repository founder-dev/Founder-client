import React from 'react';
import styled from 'styled-components';
import Image from '../assets/SignUpAssets/SignUpModal.png';
import Close from '../assets/SignUpAssets/CloseButton.png';
import KaKaoLogin from '../assets/SignUpAssets/KaKaoLogin.png';

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

const ModalImage = styled.img`
  width : 1000px;
  height : 600px;
`
const Wrapper = styled.div`
width:1000px;
height:600px;
position : relative;
`
const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: none;
  width: 60rem;
  @media (max-width: 1120px) {
    width: 50rem;
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
        <ModalImage src ={Image}/>
        <Contents>
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
