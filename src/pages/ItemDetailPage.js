import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import TopBar from '../components/TopBar';
import ItemImage from '../assets/ItemDetailPageAssets/ItemImage.png';
import ArrowWhite from '../assets/ItemDetailPageAssets/ArrowWhite.png';
import { WidthWrapper } from '../components/WidthWrapper';
import { Wrapper, CategoryWrapper,  HigherCategory, Category, ItemWrapper, 
  ItemInfo, ItemCategory, ItemName, DetailedInfo, DetailedInfoWrapper, Price, PriceWrapper, PurchaseButton,
  Schedule,Line, Guide, PurchaseText, BoughtText, ReviewButton, ReviewText
} from '../components/ItemDetailComponents/ItemDetailPresenter';
const ItemDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const itemData =[];
  /*
  /*useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const response = await axios.get(
          'https://pounder/api/product/detail/{pk}/'
        );
        itemData = response.data;
      } catch (e) {
        console.log(e);
      }
    };
    fetchItemDetail();
  }, []); 
  {itemData.product_name} //이런식으로 사용
  */
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
          <div>상세 정보</div>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default ItemDetailPage;

