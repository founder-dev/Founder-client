import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  margin-top: 80px;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  margin: 82px 0px 0px 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HigherCategory = styled.div`
  color: rgba(212, 212, 212, 1);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  margin-right: 11px;
`;

export const Category = styled.div`
color:rgba(0, 0, 0, 1)
font-size: 20px;
font-family: 'Pretendard';
font-weight: 500;
`;

export const ItemWrapper = styled.div`
  margin: 40px 120px 60px 120px;
  width: 1200px;
  height: 618px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemInfo = styled.div`
  width: 480px;
  height: 618px;
`;

export const ItemCategory = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  padding-bottom: 4px;
`;

export const ItemName = styled.div`
  color: black;
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: 800;
`;

export const DetailedInfo = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
`;

export const DetailedInfoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 292px;
  height: 24px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 408px;
  height: 48px;
`;

export const Price = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: 800;

  margin-right: 63px;
`;

export const Schedule = styled.div`
color:rgba(39, 39, 39, 1)
font-size: 20px;
font-family: 'Pretendard';
font-weight: 700;
`;

export const Line = styled.div`
  width: 480px;
  height: 2px;
  margin-top: 40px;

  background-color: black;
`;

export const Guide = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;

  margin-top: 12px;
`;

export const PurchaseButton = styled.button`
  margin-top: 62px;
  margin-bottom: 66px;
  height: 68px;
  width: 480px;
  border-radius: 4px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px; 16px 20px;
`;

export const PurchaseText = styled.div`
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;

  color: white;
`;

export const BoughtText = styled.text`
  width: 480px;
  display: flex;
  justify-content: center;

  color: rgba(0, 0, 0, 1);
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  text-align: center;
`;

export const ReviewButton = styled.button`
  margin-top: 13px;
  width: 480px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;

  background-color: white;

  border: 1.5px solid #222222;
  border-radius: 4px;
`;

export const ReviewText = styled.text`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #222222;
  cursor : pointer;
`;
