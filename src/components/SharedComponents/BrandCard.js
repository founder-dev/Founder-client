import React from 'react';
import styled from 'styled-components';
import BrandCircle from '../../assets/BrandCircle.png';
import { Link } from 'react-router-dom';
import { color } from '../../styles/theme';
const BrandCard = ({ brandName, brandLogo, id, comingsoon }) => {
  return (
    <Link to={`/branddetail/${id}`}>
      <BrandCardContainer>
        <BrandLogoBackground src={BrandCircle}></BrandLogoBackground>
        <BrandLogo src={brandLogo} loading="lazy" />
        <BrandName comingsoon={comingsoon}>{brandName}</BrandName>
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
`;

const BrandLogoBackground = styled.img`
  width: 160px;
  height: 160px;
  position: relative;
`;

const BrandLogo = styled.img`
  position: absolute;
  width: 92px;
  height: 44px;
  top: 57.69px;
  left: 35px;
`;

const BrandName = styled.div`
  margin-top: 10.3px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27.6px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => (props.comingsoon ? color.grey[3] : '#222222')};
`;
