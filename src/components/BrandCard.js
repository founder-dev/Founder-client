import React from 'react';
import styled from 'styled-components';
import BrandCircle from '../assets/BrandCircle.png';
import Meally from '../assets/Meally.png';
import { Link } from 'react-router-dom';

const BrandCard = ({ brandName }) => {
  return (
    <Link to={`/branddetail`}>
      <BrandCardContainer>
        <BrandLogoBackground src={BrandCircle}></BrandLogoBackground>
        <BrandLogo src={Meally} loading="lazy" />
        <BrandName>{brandName}</BrandName>
      </BrandCardContainer>
    </Link>
  );
};

export default BrandCard;

const BrandCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 30px;
`;

const BrandLogoBackground = styled.img`
  width: 160px;
  height: 160px;
`;

const BrandLogo = styled.img`
  position: absolute;
  top: 60px;
  left: 34px;
  width: 100px;
  height: 40px;
`;

const BrandName = styled.div`
  margin-top: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #222222;
`;
