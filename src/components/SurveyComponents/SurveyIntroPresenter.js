import styled from 'styled-components';
import { color, fontsize, fontWeight } from '../../../src/lib/theme';

export const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const Title = styled.img`
  width: 1343px;
  height: 90px;
  margin-top: 46px;
`;

export const Logo = styled.img`
  width: 399.65px;
  height: 65px;
`;

export const LogoWrapper = styled.div`
  margin-top: 36.3px;
  width: 1343px;
  height: 65px;
`;

export const CustomSticker = styled.img`
  position: absolute;
  width: 186.34px;
  height: 62.11px;
  left: ${(props) => props.left || '112px'};
  top: ${(props) => props.top || '610px'};
  z-index: ${(props) => props.z || 1};
  transform: ${(props) => props.rotate || 'rotate(-15deg)'}; ;
`;

export const BlueSticker = styled.img`
  position: absolute;
  width: 175.99px;
  height: 175.99px;
  left: ${(props) => props.left || '27px'};
  top: ${(props) => props.top || '468px'};
  z-index: 2;
  transform: ${(props) => props.rotate || 'rotate(15deg)'}; ;
`;

export const Person = styled.img`
  position: absolute;
  width: 684.67px;
  height: 656.55px;
  left: 717px;
  top: 146px;
`;
export const Text = styled.div`
  width: 783px;
  height: 96px;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
`;

export const Text2 = styled.div`
  width: 433px;
  height: 72px;
  padding-top: 25px;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  color: ${color.grey[7]};
  text-align: center;
`;

export const BlueText = styled.span`
  color: #007dfe;
`;

export const SurveyGo = styled.button`
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;
  margin-top: 74px;
  margin-bottom: 240px;
  background: #383838;
  border-radius: 4px;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  color: ${color.white};
  font-family: 'Pretendard';
  cursor: pointer;
`;

export const TextContainer = styled.div`
  width: 783px;
  height: 96px;
  margin-top: 754.7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
