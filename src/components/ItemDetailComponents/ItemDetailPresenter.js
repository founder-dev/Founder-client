import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  justify-content: center;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  margin: 108px 0px 0px 260px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HigherCategory = styled.div`
  color: rgba(212, 212, 212, 1);
  font-size: 20px;
  font-weight: 500;
  margin-right: 11px;
  line-height: 36px;
  cursor: pointer;
`;

export const Category = styled.div`
  color:rgba(0, 0, 0, 1)
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
`;

export const ItemWrapper = styled.div`
  margin: 40px 260px 60px 260px;
  width: 920px;
  height: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemInfo = styled.div`
  width: 480px;
  height: 618px;
`;

export const CustomLocator = styled.div`
  width: 277.2px;
  height: 67.63px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ItemNameWrapper = styled.div`
  width: 203.71px;
`;

export const ItemCategory = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 2.63px;
`;

export const ItemName = styled.div`
  color: black;
  font-size: 28px;
  font-weight: 800;
  width: 800px;
`;

export const Img = styled.img`
  position: absolute;
  left: ${(props) => props.left * 17}px;
  bottom: 40px;
`;

export const DetailedInfo = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  font-weight: 500;
`;

export const DetailedInfoWrapper = styled.div`
  margin-top: 18.14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 222.67px;
  height: 19px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 320px;
  height: 37px;
`;

export const Price = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 28px;
  font-weight: 800;

  margin-right: 46.67px;
`;

export const Schedule = styled.div`
color:rgba(39, 39, 39, 1)
font-size: 16px;
font-weight: 700;
`;

export const Line = styled.div`
  width: 368px;
  height: 2px;
  margin-top: 30.39px;

  background-color: black;
`;

export const Guide = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  font-weight: 500;

  margin-top: 12px;
`;

export const PurchaseButton = styled.button`
  margin-top: 48px;
  margin-bottom: 56.28px;
  width: 368px;
  height: 52px;
  border-radius: 4px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  cursor: pointer;
`;

export const PurchaseText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const BoughtText = styled.text`
  width: 116px;
  height: 19px;
  display: flex;

  color: rgba(0, 0, 0, 1);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  margin-left: 126px;
`;

export const ReviewButton = styled.button`
  margin-top: 7.72px;
  width: 368px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 82px;
  gap: 8px;

  background-color: white;

  border: 1.5px solid #222222;
  border-radius: 4px;
`;

export const ReviewText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 15.3167px;
  line-height: 28px;
  color: #222222;
  cursor: pointer;
`;
