import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../components/Modal';
import TopBar from '../components/TopBar';
import ItemImage from '../assets/ItemDetailPageAssets/ItemImage.png';
import ArrowWhite from '../assets/ItemDetailPageAssets/ArrowWhite.png';
import { WidthWrapper } from '../components/WidthWrapper';
import {
  Wrapper,
  ItemWrapper,
  ItemInfo,
  PurchaseButton,
  Line,
  Guide,
  PurchaseText,
  BoughtText,
  ReviewButton,
  ReviewText,
} from '../components/ItemDetailComponents/ItemDetailPresenter';
import { color, fontsize, fontWeight } from '../lib/theme';
import ItemReview from '../components/ItemDetailComponents/ItemReview';
import ItemDetailCategory from '../components/ItemDetailComponents/ItemDetailCategory';
import Item from '../components/ItemDetailComponents/Item';

const ItemDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const itemData = [];
  const [isSelected, setIsSelected] = useState(true);
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
          <ItemDetailCategory />
          <ItemWrapper>
            <img src={ItemImage} />
            <ItemInfo>
              <Item />
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
          <div>
            <MenuBar
              onClick={() => setIsSelected(!isSelected)}
              isSelected={isSelected}
            >
              상세정보
            </MenuBar>
            <MenuBar
              onClick={() => setIsSelected(!isSelected)}
              left="28px"
              isSelected={!isSelected}
            >
              후기 모아보기
            </MenuBar>
          </div>
          {isSelected ? <div>상세정보컴포넌트</div> : <ItemReview />}
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default ItemDetailPage;

const MenuBar = styled.span`
  margin-left: ${(props) => props.left || '632px'};
  cursor: pointer;
  font-weight: ${fontWeight[2]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  ${(props) =>
    props.isSelected
      ? css`
          color: ${color.main[2]};
          border-bottom: 3px solid;
        `
      : `
        color: ${color.grey[3]};`}
`;
