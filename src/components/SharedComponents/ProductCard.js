import React, { useState } from 'react';
import styled from 'styled-components';
import itemImage from '../../assets/ProductCardAssets/itemImage.png';
import Weekly from '../../assets/ProductCardAssets/Weekly.png';
import Monthly from '../../assets/ProductCardAssets/Monthly.png';
import customSticker from '../../assets/ProductCardAssets/customSticker.png';
import Rated from '../StarRating/Rated';
import { fontWeight, fontsize } from '../../lib/theme';

const ProductCard = ({ itemName, price, rating, custom, schedule }) => {
  
  const [itemHover, setItemHover] = useState(false);
  return (
    <ProductCardContainer
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      {itemHover ? (
    <>
          <Image src={itemImage} loading="lazy" />
          <HoverInfoContainer>
            <HoverInfoTitle>가격/용량*개수</HoverInfoTitle>
            <HoverInfoTitle>배송 주기</HoverInfoTitle>
          </HoverInfoContainer>
          <HoverInfoContainer marginTop={'2.51px'} width={'239px'}>
            <HoverInfo>7.07~7.27원</HoverInfo>
            <HoverInfo>1주/2주/4주/6주/2달</HoverInfo>
          </HoverInfoContainer>
        </>
      ) : (
   <>
          <ImageWrapper>
            <Image src={itemImage} loading="lazy" />

            {schedule === 'Weekly' ? (
              <>
                <Sticker src={Weekly} />
              </>
            ) : (
              <>
                <Sticker src={Monthly} />
              </>
            )}

            {custom ? (
              <>
                <CustomSticker src={customSticker} />
              </>
            ) : null}
          </ImageWrapper>
          <ProductCardTitle>{itemName}</ProductCardTitle>
          <PriceRatingWrapper>
            <Price>{price}</Price>
            <Rated rating={rating} />
          </PriceRatingWrapper>
        </>
      )}
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

const HoverInfoContainer = styled.div`
  margin-top: ${(props) => props.marginTop || '5.38px'};
  margin-left: 21.51px;
  width: ${(props) => props.width || '146px'};
  display: flex;
  justify-content: space-between;
`;

const HoverInfoTitle = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 10.7532px;
  line-height: 18px;
  color: #888888;
`;

const HoverInfo = styled.text`
  font-weight: 500;
  font-size: 15.3617px;
  line-height: 28px;
  color: #272727;
`;
