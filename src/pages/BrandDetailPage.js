import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import brandArrow from '../assets/BrandDetailPageAssets/brandArrow.png';
import { WidthWrapper } from '../components/WidthWrapper';
import { color, fontWeight, fontsize } from '../styles/theme';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBrandDetail } from '../API';

const BrandDetailPage = () => {
  const [brandDetaildata, setBrandDetailData] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchBrandDetail({ setBrandDetailData, id });
  }, []);

  if (!brandDetaildata) return null;
  console.log(brandDetaildata);

  return (
    <>
      <WidthWrapper>
        <Wrapper img={brandDetaildata.brand_img_bg}>
          <TopBar
            position={'static'}
            opacity={'rgba(0, 0, 0, 0.25)'}
            color={'white'}
          />
          <Container>
            <BrandTitle>{brandDetaildata.brand_name_eng}</BrandTitle>
            <Description>{brandDetaildata.brand_desc}</Description>
            <a href={brandDetaildata.brand_link}>
              <BrandButton>
                <ButtonText>브랜드 홈 방문하기</ButtonText>
                <BrandArrow src={brandArrow} />
              </BrandButton>
            </a>
          </Container>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default BrandDetailPage;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  text-align: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1440px;
  height: 100vh;
  background-image: url(${(props) => props.img});
  flex-direction: column;
  background-size: cover;
  color: ${color.white};
`;

const BrandTitle = styled.div`
  position: absolute;
  top: 22%;

  word-break: nowrap;
  width: 1440px;
  font-weight: ${fontWeight[3]};
  font-size: 120px;
  line-height: 160px;
`;

const Description = styled.div`
  width: 720px;

  margin-top: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  text-align: center;

  color: #ffffff;
  word-break: keep-all;
`;

const BrandButton = styled.div`
  position: absolute;
  left: 38%;
  top: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
  height: 52px;
  background: ${color.grey[7]};

  border: 0.765833px solid ${color.grey[7]};
  border-radius: 4px;

  cursor: pointer;
`;

const ButtonText = styled.div`
  font-size: 16px;
  line-height: 28px;
  margin: 12px 0px 12px 16px;
  color: white;
`;

const BrandArrow = styled.img`
  margin: 16.81px 16px 16.81px 0px;
`;
