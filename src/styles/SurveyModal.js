import React from 'react';
import styled from 'styled-components';
import Survey from '../assets/SurveyAssets/Survey.png';

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

const ModalBlock = styled.div`
  position: absolute;
  border-radius: 10px;
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

const Wrapper = styled.div`
  position : relative;

`
const GoSurvey = styled.button`
  position : absolute;
  bottom : 118.4px;
  right : 589.5px;
  border : 0;
  outline : 0;
  background-color : white;
  cursor : pointer;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SurveyModal = ({ setOpenModal }) => {
  return (
    <Container>
      <Background />
      <ModalBlock>
        <Wrapper>
        <Contents>
          <GoSurvey
            onClick={() => {
              setOpenModal(false);
            }}
          >
            지금당장시작하기
          </GoSurvey>
        </Contents>
        </Wrapper>
      </ModalBlock>
    </Container>
  );
};

export default SurveyModal;
