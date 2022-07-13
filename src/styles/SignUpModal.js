import React from 'react';
import styled from 'styled-components';
import Close from '../assets/SignUpAssets/CloseButton.png';
import KaKaoLogin from '../assets/SignUpAssets/KaKaoLogin.png';
import Founder from '../assets/SharedAssets/Founder.png';
import FounderModel from '../assets/SignUpAssets/FounderModel.png';
import LifeStyle from '../assets/SignUpAssets/LifeStyle.png';
import { fontWeight, color } from '../lib/theme';
import KaKaoCode from '../components/KakaoCode';
import { Container, Background } from '../components/ModalDesign';

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
top : 137px;
left : 300px;
padding-bottom : 23px;
width: 400px;
height: 66px;
`
const Model = styled.img`

position : absolute;
right: 0.8px;
top: 0px;

`
const Text = styled.div`

position : absolute;
font-size : 20px;
font-weight: ${fontWeight[0]};
left: 284px;
top: 226px;
width: 433px;
height: 72px;
line-height: 36px;

`
const ModalBlock = styled.div`
  position: absolute;
  top: 2.5rem;
  height: 600px;
  border-radius: 4px;
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
  width: 16px;
  height: 16px;
  background-color : white;
  cursor : pointer;
`;

const LoginButton = styled.button`
  position : absolute;
  background-color : none;
  left: 260px;
  top: 382px;
  cursor : pointer;
  padding : 0;
  padding-bottom:0;
  border: none;
  height : 68px;
`;

const Guide = styled.div`
  position: absolute;
  width: 301px;
  height: 24px;
  left: 349px;
  top: 466px;
  font-weight: ${fontWeight[0]};
  line-height: 24px;
  color : ${color.grey[5]};

`;
const SignUpModal = ({ setOpenModal }) => {
  return (
    <Container>
      <Background/>
      <ModalBlock>
        <Wrapper>
        <Contents>
          <Logo src ={Founder}/>
          <Text>지금 로그인하고 파운더만의 설문조사에 참여하세요.
             89가지 제품 중 가장 필요한 제품을 큐레이션 해드려요.</Text>
          <LoginButton onClick={KaKaoCode}><img src ={KaKaoLogin}/></LoginButton>
          <Guide>서비스 이용을 위해 이메일과 이름을 수집합니다.</Guide>
          <CloseButton
            onClick={() => {
              setOpenModal(false);
            }}
          ><img src ={Close}  alt=""/>
          </CloseButton>
        </Contents>
        </Wrapper>
      </ModalBlock>
    </Container>
  );
};

export default SignUpModal;
