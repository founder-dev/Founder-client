import TopBar from '../components/TopBarComponents/TopBar';
import brandArrow from '../assets/BrandDetailPageAssets/brandArrow.png';
import { WidthWrapper } from '../components/WidthWrapper';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBrandDetail } from '../API';
import {
  Wrapper,
  Container,
  BrandTitle,
  Description,
  BrandButton,
  ButtonText,
  BrandArrow,
} from '../components/BrandDetailComponents/BrandDetailPresenter';

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
