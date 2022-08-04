import styled from 'styled-components';
import Arrow from '../../assets/MagazineDetailPageAssets/Arrow.png';
import Logo from '../../assets/MagazineDetailPageAssets/Logo.png';
import { Link } from 'react-router-dom';
import { fetchBrandDetail } from '../../API';
import { useState, useEffect } from 'react';
import React from 'react';

const BrandMovingButton = ({ top, left, id }) => {
  const [brandDetaildata, setBrandDetailData] = useState(null);

  useEffect(() => {
    fetchBrandDetail({ setBrandDetailData, id });
  }, []);

  if (!brandDetaildata) return null;
  console.log(brandDetaildata);

  if (!brandDetaildata) return null;

  return (
    <BrandHome top={top} left={left}>
      <BrandInfoWrapper>
        <BrandLogo src={brandDetaildata.brand_img_logo} />
        <TextWrapper>
          <BrandName>{`${brandDetaildata.brand_name} (${brandDetaildata.brand_name_eng})`}</BrandName>
          <BrandDetail>{brandDetaildata.brand_desc_detail}</BrandDetail>
        </TextWrapper>
      </BrandInfoWrapper>

      <a href={brandDetaildata.brand_link}>
        <BrandButton>
          <ButtonText>브랜드 홈 방문하기</ButtonText>
          <BrandArrow src={Arrow} />
        </BrandButton>
      </a>
    </BrandHome>
  );
};

export default BrandMovingButton;

const BrandHome = styled.div`
  position: relative;
  width: 920px;
  height: 80px;

  background: #fafafa;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  margin-left: ${(props) => props.left || '260px'};
  margin-right: 260px;

  padding-bottom: 20px;
`;
const BrandInfoWrapper = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

const BrandLogo = styled.img`
  margin: 28px 32px 8px 32px;
  position: absolute;
  width: 107px;
  height: 44px;
`;

const TextWrapper = styled.div`
  position: absolute;
  align-items: column;
  width: 683px;
  left: 170px;
`;

const BrandName = styled.div`
  font-weight: 700;
  font-size: 20px;
  height: 30px;
  margin-top: 20px;
  line-height: 31px;
`;

const BrandDetail = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 30px;
  height: 36px;
  line-height: 28px;
`;

const ButtonText = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin: 13px 21.01px 13px;
`;

const BrandArrow = styled.img`
  margin-right: 10px;
`;

const BrandButton = styled.div`
  width: 180px;
  height: 37px;
  position: absolute;
  top: 40px;
  left: 700px;
  border-radius: 4px;
  border: 1px solid #222222;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;
