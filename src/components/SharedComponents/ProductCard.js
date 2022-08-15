import React, { useState } from 'react';
import styled from 'styled-components';
import Weekly from '../../assets/ProductCardAssets/Weekly.png';
import Monthly from '../../assets/ProductCardAssets/Monthly.png';
import customSticker from '../../assets/ProductCardAssets/customSticker.png';
import Rated from '../StarRating/Rated';
import { fontWeight, fontsize } from '../../styles/theme';

const ProductCard = ({
  itemName,
  productImg,
  price,
  rating,
  custom,
  schedule,
  minPrice,
  maxPrice,
  scheduleKorean,
}) => {
  const [itemHover, setItemHover] = useState(false);

  return (
    <ProductCardContainer
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      {itemHover ? (
        <>
          <Image src={productImg} loading="lazy" />

          <Container>
            <HoverInfoContainer>
              <HoverInfoTitle>가격/용량*개수</HoverInfoTitle>
              <HoverInfo>
                {minPrice !== null ? (
                  maxPrice !== null ? (
                    <>
                      <span>{minPrice}</span>
                      <span>~{maxPrice}</span>원
                    </>
                  ) : (
                    <>
                      <span>{minPrice}</span>원
                    </>
                  )
                ) : (
                  <span>N/A</span>
                )}
              </HoverInfo>
            </HoverInfoContainer>
            <HoverInfoContainer>
              <HoverInfoTitle>배송 주기</HoverInfoTitle>
              <HoverInfo>{scheduleKorean}</HoverInfo>
            </HoverInfoContainer>
          </Container>
        </>
      ) : (
        <>
          <ImageWrapper>
            <ImageContainer>
              <Image src={productImg} loading="lazy" />
            </ImageContainer>
            {schedule === 'weekly' ? (
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
            <Price>{price} 원</Price>
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

const ImageContainer = styled.div`
  width: 288px;
  height: 276px;
`;
const Image = styled.img`
  width: 288.27px;
  height: 276px;
  display: block;
  margin-top: 9.2px;
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
  font-weight: ${fontWeight[2]};
  font-size: ${fontsize[3]};
`;

const HoverInfoContainer = styled.div`
  margin-top: ${(props) => props.marginTop || '5.38px'};
  margin-left: 21.51px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 5.38px;
  padding-left: 21.51px;
  width: 288px;
  display: flex;
  flex-direction: row;
`;

const HoverInfoTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #888888;

  margin-right: 41px;
`;

const HoverInfo = styled.span`
  font-weight: 500;
  font-size: 15.3617px;
  line-height: 27.65px;
  color: #272727;
  padding-right: 22px;
`;
