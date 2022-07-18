import React from 'react';
import styled from 'styled-components';
import itemImage from '../assets/ProductCardAssets/itemImage.png';
import sticker from '../assets/ProductCardAssets/sticker.png';
import customSticker from '../assets/ProductCardAssets/customSticker.png';
import Rated from '../components/StarRating/Rated';
import { fontWeight, fontsize } from '../lib/theme';

const ProductCard = ({ itemName, price, rating, custom, schedule }) => {
  return (
    <ProductCardContainer>
      <ImageWrapper>
        <Image src={itemImage} loading="lazy"/>
        <Sticker src={sticker} />
        {custom ? (
          <>
            <CustomSticker src={customSticker} />
            <Schedule>{schedule}</Schedule>
          </>
        ) : null}
      </ImageWrapper>
      <ProductCardTitle>{itemName}</ProductCardTitle>
      <PriceRatingWrapper>
        <Price>{price}</Price>
        <Rated rating={rating} />
      </PriceRatingWrapper>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  background-color: rgba(246, 246, 244, 1);
  border-radius: 4px;
  width: 288px;
  height: 370px;
`;

const Image = styled.img`
  margin-top: 12px;
  width: 288px;
  height: 276px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Sticker = styled.img`
  position: absolute;
  top: 11.94px;
  right: 32.06px;
  width: 78px;
  height: 78px;
`;

const CustomSticker = styled.img`
  position: absolute;
  top: 106.05px;
  right: 27.92px;
`;

const Schedule = styled.div`
  position: absolute;
  top: 60px;
  right: 45px;
  color: pink;
  font-size: 16px;
  font-family: 'Pretendard';
`;

const ProductCardTitle = styled.div`
  margin-top: 12px;
  font-size: 17px;
  font-weight: ${fontWeight[0]};
  color: black;
  font-family: 'Pretendard';
  margin-left: 21.47px;
`;

const PriceRatingWrapper = styled.div`
  margin: 4px 0px 11.8px 21.47px;
  padding-right: 18px;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  color: rgba(0, 125, 254, 1);
  font-style: normal;
  font-weight: ${fontWeight[2]};
  font-size: ${fontsize[3]};
`;
