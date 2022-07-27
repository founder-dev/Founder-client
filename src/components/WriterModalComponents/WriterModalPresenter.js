import { color, fontsize, fontWeight } from '../../styles/theme';
import styled, { css } from 'styled-components';

export const ModalBlock = styled.div`
  position: absolute;
  width: 1200px;
  height: 992px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ScheduleSticker = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  left: 986px;
  top: 114px;
`;

export const CustomSticker = styled.img`
  position: absolute;
  width: 111.96px;
  height: 50.68px;
  left: 1040px;
  top: 190px;
`;

export const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  margin: 38px 0px 0px 61px;

  color: rgba(39, 39, 39, 1);
`;

export const CancleImg = styled.img`
  position: absolute;
  top: 42px;
  right: 71px;
  bottom: 914px;
  left: 1093px;
`;

export const ItemBoxWrapper = styled.div`
  width: 1068px;
  height: 120px;
  margin: 11px 71px 0px 61px;
  display: flex;
  justify-content: space-between;
`;

export const ItemBox = styled.div`
  width: 534px;
  height: 104px;
  padding-top: 32px;
  padding-left: 32px;
  border-radius: 4px;
  background-color: rgba(250, 250, 250, 1);
`;

export const DetailWrapper = styled.div`
  width: 312px;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

export const ItemName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: rgba(102, 102, 102, 1);

  height: 36px;
`;

export const DetailBox = styled.div`
  margin-top: 5px;
  display: flex;
  height: 32px;
`;

export const DetailGray = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: rgba(136, 136, 136, 1);

  margin-right: 12px;
`;

export const DetailBlack = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;

rgba(102, 102, 102, 1);
`;

export const LengthText = styled.div`
  position: absolute;
  width: 119px;
  height: 24px;
  left: 1002px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${color.grey[4]};
  ${(props) =>
    props.top
      ? css`
          top: 750px;
        `
      : `top:570px;`}
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%-61px;
  height: 68px;
  margin: 39px 31px 0px 31px;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;
  border-radius: 4px;
  font-size: 20px;

  width: 480px;
  height: 68px;

  background-color: ${(props) => (props.disabled ? '#FAFAFA' : '#007DFE')};
  color: ${color.grey[3]};
  border: none;
`;

export const CheckButton = styled.img`
  padding-left: 8px;
  width: 20px;
  height: 19.2px;
`;

export const Essential = styled.span`
  font-size: 16px;
  color: #ff3f3f;
  padding-left: 8px;
`;

export const Instruction = styled.div`
  font-weight: ${(props) => props.weight};
  font-size: 20px;

  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
