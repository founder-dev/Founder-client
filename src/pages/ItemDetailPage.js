import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import TopBar from '../components/TopBar';
import ItemImage from '../assets/ItemDetailPageAssets/ItemImage.png';
import ArrowWhite from '../assets/ItemDetailPageAssets/ArrowWhite.png';

const ItemDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TopBar />
      <WidthWrapper>
        <Wrapper>
          <CategoryWrapper>
            <HigherCategory>식품</HigherCategory>
            <HigherCategory>{'>'}</HigherCategory>
            <HigherCategory>그릭 요거트</HigherCategory>
            <HigherCategory>{'>'}</HigherCategory>
            <Category>룩트 그릭 요거트</Category>
          </CategoryWrapper>
          <ItemWrapper>
            <img src={ItemImage} />
            <ItemInfo>
              <ItemCategory>그릭 요거트</ItemCategory>
              <ItemName>룩트 그릭 요거트</ItemName>
              <DetailedInfoWrapper>
                <DetailedInfo>최저가</DetailedInfo>
                <DetailedInfo>배송 주기</DetailedInfo>
              </DetailedInfoWrapper>

              <PriceWrapper>
                <Price>44,380 원</Price>
                <Schedule>1주/2주/4주/6주/2달</Schedule>
              </PriceWrapper>

              <Line />
              <Guide>
                상품 문의와 자세한 정보를 원하신다면 판매 사이트를 방문해주세요.
              </Guide>
              <PurchaseButton>
                <PurchaseText>구매하러 갈래요</PurchaseText>
                <img src={ArrowWhite} />
              </PurchaseButton>
              <BoughtText>이미 구매한 상품인가요?</BoughtText>
              <ReviewButton>
                <ReviewText
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  후기 작성하기
                </ReviewText>
                {modalOpen && (
                  <Modal setOpenModal={setModalOpen} type="WriterModal" />
                )}
              </ReviewButton>
            </ItemInfo>
          </ItemWrapper>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default ItemDetailPage;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  margin: 82px 0px 0px 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HigherCategory = styled.div`
  color: rgba(212, 212, 212, 1);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  margin-right: 11px;
`;

const Category = styled.div`
color:rgba(0, 0, 0, 1)
font-size: 20px;
font-family: 'Pretendard';
font-weight: 500;
`;

const ItemWrapper = styled.div`
  margin: 40px 120px 60px 120px;
  width: 1200px;
  height: 618px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInfo = styled.div`
  width: 480px;
  height: 618px;
`;

const ItemCategory = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  padding-bottom: 4px;
`;

const ItemName = styled.div`
  color: black;
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: 800;
`;

const DetailedInfo = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
`;

const DetailedInfoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 292px;
  height: 24px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 408px;
  height: 48px;
`;

const Price = styled.div`
  color: rgba(0, 125, 254, 1);
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: 800;

  margin-right: 63px;
`;

const Schedule = styled.div`
color:rgba(39, 39, 39, 1)
font-size: 20px;
font-family: 'Pretendard';
font-weight: 700;
`;

const Line = styled.div`
  width: 480px;
  height: 2px;
  margin-top: 40px;

  background-color: black;
`;

const Guide = styled.div`
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;

  margin-top: 12px;
`;

const PurchaseButton = styled.button`
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

const PurchaseText = styled.div`
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;

  color: white;
`;

const BoughtText = styled.text`
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

const ReviewButton = styled.button`
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

const ReviewText = styled.text`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #222222;
`;
