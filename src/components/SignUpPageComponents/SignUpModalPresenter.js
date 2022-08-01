import styled from 'styled-components';
import { color, fontsize, fontWeight } from '../../styles/theme';

export const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  position: relative;
`;
export const Thumbnail = styled.img`
  position: absolute;
  top: 52px;
  left: 41.05px;
`;
export const Logo = styled.img`
  position: absolute;
  top: 137px;
  left: 300px;
  padding-bottom: 23px;
  width: 400px;
  height: 66px;
`;
export const Model = styled.img`
  position: absolute;
  right: 0.8px;
  top: 0px;
`;
export const Text = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: ${fontWeight[0]};
  left: 284px;
  top: 226px;
  width: 433px;
  height: 72px;
  line-height: 36px;
`;
export const ModalBlock = styled.div`
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

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40.01px;
  right: 40px;
  border: 0;
  outline: 0;
  width: 16px;
  height: 16px;
  background-color: white;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  position: absolute;
  background-color: none;
  left: 260px;
  top: 382px;
  cursor: pointer;
  padding: 0;
  padding-bottom: 0;
  border: none;
  height: 68px;
`;

export const Guide = styled.div`
  position: absolute;
  width: 301px;
  height: 24px;
  left: 349px;
  top: 466px;
  font-weight: ${fontWeight[0]};
  line-height: 24px;
  color: ${color.grey[5]};
`;
