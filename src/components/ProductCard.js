import React from 'react';
import styled from 'styled-components';
import itemImage from '../assets/ProductCardAssets/itemImage.png';
import sticker from '../assets/ProductCardAssets/sticker.png';
import customSticker from '../assets/ProductCardAssets/customSticker.png';

const ProductCard = ({ itemName, price, rating, custom, schedule }) => {
  return (
    <ProductCardContainer>
      <Sticker src={sticker} />
      {custom ? <CustomSticker src={customSticker} /> : null}
      <Image src={itemImage} />
      <ProductCardTitle>{itemName}</ProductCardTitle>
      <Price>{price}</Price>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  background-color: pink;
  border-radius: 4px;
  width: 376px;
  height: 470px;
`;

const Image = styled.img``;

const CustomSticker = styled.img`
  position: absolute;
  transform: translateX(100px);
`;

const Sticker = styled.img`
  position: absolute;
  transform: translateY(40px);
`;

const ProductCardTitle = styled.div`
  margin-top: 12px;
  color: black;
  font-size: 24px;
  font-family: 'Pretendard';
`;

const Price = styled.div`
  margin-top: 4px;
  color: blue;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Pretendard';
`;

const Rating = styled.div``;
