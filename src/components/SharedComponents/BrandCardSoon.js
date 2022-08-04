import React from 'react';
import styled from 'styled-components';
import BrandCircle from '../../assets/BrandCircle.png';
import ComingSoon from '../../assets/ComingSoon.png';

const BrandCard = ({ id }) => {
  return (
    <BrandCardContainer>
      <BrandLogoBackground src={BrandCircle}></BrandLogoBackground>
      <BrandLogo src={ComingSoon} loading="lazy" />
      <BrandName>커밍쑨</BrandName>
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
  width: 160px;
  height: 160px;
  position: relative;
`;

const BrandLogo = styled.img`
  position: absolute;
  left: 6.02%;
  right: 5.56%;
  top: 37.37%;
  bottom: 32.53%;
`;

const BrandName = styled.div`
  margin-top: 10.3px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27.6px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #d5d5d5;
`;
