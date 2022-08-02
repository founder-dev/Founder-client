import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import background from '../assets/BrandDetailPageAssets/background.png';
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
  background-image: url(${(props) => (props.img)});
  flex-direction: column;
  background-size: cover;
  color: ${color.white};
`;

const BrandTitle = styled.div`
  position: absolute;
  top: 22.65%;

  font-style: normal;
  font-weight: ${fontWeight[3]};
  font-size: 160px;
  line-height: 160px;
`;

const Description = styled.div`
  position: absolute;
  left: 38%;
  top: 44%;
  margin-top: 80px;
  width: 350px;
  text-align: center;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[3]};
  line-height: 28px;
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
