import { useEffect, useState } from 'react';
import FounderLogo from '../assets/MainPageAssets/logo.png';
import Banner from '../components/MainPageComponents/Banner';
import styled from 'styled-components';
import TopBar from '../components/TopBarComponents/TopBar';
import { Logo } from '../components/FounderLogo';
import ProductCard from '../components/SharedComponents/ProductCard';
import BrandCard from '../components/SharedComponents/BrandCard';
import {
  Container,
  GridWrapper,
} from '../components/SharedComponents/GridLayout';
import { Link } from 'react-router-dom';
import TagArray from '../components/SharedComponents/TagArray';
import axios from 'axios';

const MainPage = () => {
  const [recommendationData, setRecommendationData] = useState(null);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await axios.get(
          'https://found-er.co.kr/api/recommend',
          /*{
            headers : {
              Authorazation: '',
            }
          }, // 이래도 안됨ㅋ*/
        );
        setRecommendationData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRecommendation();
  }, []);

  if (!recommendationData) return null;

  return (
    <>
      <Logo src={FounderLogo} />
      <TopBar position={'sticky'} main={'main'} />
      <WidthWrapper>
        <Wrapper>
          <Banner />
          <Container>
            {recommendationData.rec_type.map((content) => (
              <>
                <ItemTitle text={content.type_name} key={content.id} />
                <SubTitle>
                  {content.type_desc}{' '}
                  <TagArray tag={content.type_tag_arr} key={content.id} />
                </SubTitle>

                {content.type_product != '' && (
                  <GridWrapper>
                    {content.type_product.map(
                      ({
                        product_name,
                        product_img,
                        min_price,
                        star_rate_avg,
                        custom_flag,
                        delivery_cycle,
                        product_main_img,
                        min_std_price,
                        max_std_price,
                        delivery_cycle_detail,
                        id,
                      }) => (
                        <Link to={`/itemdetail/${content.type_name}/${id}`}>
                          <ProductCard
                            itemName={product_name}
                            productImg={product_img}
                            price={min_price}
                            rating={star_rate_avg}
                            custom={custom_flag}
                            schedule={delivery_cycle}
                            image={product_main_img}
                            minPrice={min_std_price}
                            maxPrice={max_std_price}
                            scheduleKorean={delivery_cycle_detail}
                          />
                        </Link>
                      )
                    )}
                  </GridWrapper>
                )}
                <BrandCardWrapper>
                  {content.type_brand.map((brand) => (
                    <>
                      <BrandCard
                        brandName={brand.brand_name}
                        key={brand.id}
                        brandLogo={brand.brand_img_logo}
                        id={brand.id}
                      />
                    </>
                  ))}
                </BrandCardWrapper>
              </>
            ))}
          </Container>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MainPage;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
  align-items: center;
`;

const SubTitle = styled.div`
  margin-top: 52px;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`;

const ItemTitle = styled.div`
  margin-top: 4px;
  margin-bottom: 42.75px;
  color: black;
  font-size: 24px;
  line-height: 36px;
  font-weight: 800;
`;

const BrandsTitle = styled.div`
  margin-top: 120px;
  color: black;
  font-size: 28px;
  font-weight: bold;
`;

const BrandCardWrapper = styled.div`
  width: 920px;
  display: flex;
  flex-wrap: wrap;

  margin-top: 18.4px;
  margin-bottom: 79.82px;

  column-gap: 30px;
  row-gap: 20px;
`;
