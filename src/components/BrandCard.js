import React from 'react';
import styled from 'styled-components';
import BrandCircle from '../assets/BrandCircle.png';
import Meally from '../assets/Meally.png';

const BrandCard = ({ brandName }) => {
  return (
    <BrandCardContainer>
      <BrandLogoBackground src={BrandCircle}></BrandLogoBackground>
      <BrandLogo src={Meally} loading="lazy"/>
      <BrandName>{brandName}</BrandName>
    </BrandCardContainer>
  );
};

export default BrandCard;

const BrandCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BrandLogoBackground = styled.img`
  width: 208px;
  height: 208px;
`;

const BrandLogo = styled.img`
  position: absolute;
  top: 75px;
  left: 34px;
`;

const BrandName = styled.div`
  margin-top: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #222222;
`;
