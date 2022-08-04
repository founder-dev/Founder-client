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
import ItemTitle2 from '../components/SharedComponents/ItemTitle2';

const MainPage = () => {
  const [recommendationData, setRecommendationData] = useState(null);

  //프론트에서 처리하는 카테고리
  var dicText = {
    salad: 'food',
    yogurt: 'food',
    milk: 'food',
    'fried-rice': 'food',
    shake: 'food',
    cereal: 'food',
    bread: 'food',
    chicken: 'food',
    'coffee-cold': 'beverage',
    'coffee-beans': 'beverage',
    'coffee-capsule': 'beverage',
    tea: 'beverage',
    pad: 'goods',
    teeth: 'goods',
    pack: 'goods',
    cotton: 'goods',
    lens: 'goods',
    shaver: 'goods',
    lacto: 'health',
    'supplement-pack': 'health',
    'skin-care-pack': 'health',
    'care-pack': 'health',
    collagen: 'health',
    lens_cotton_collagen: 'health',
    protein: 'health',
  };

  //초기 상태 유저를 위해 
  var token = localStorage.accesstoken == undefined ? `` : `Bearer ${localStorage.accesstoken}`; 

  console.log(token);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await axios.get(
          'https://found-er.co.kr/api/recommend',
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setRecommendationData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRecommendation();
  }, []);

  if (!recommendationData) return null;
  console.log(recommendationData);
  return (
    <>
      <Logo src={FounderLogo} />
      <TopBar position={'sticky'} main={'main'} />
      <WidthWrapper>
        <Wrapper>
          <Banner />

          {recommendationData.curation != null && (
            <>
              <SubTitle>선택이 어려운 당신을 위한 추천</SubTitle>
              <RowWrapper>
              <Title>오롯이 당신을 위한</Title>
              <TagArray tag="큐레이션,1:1,맞춤추천" />
              </RowWrapper>
              <BrandCardWrapper>
                {recommendationData.curation.map((brand) => (
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
          )}
          <Container>
            {recommendationData.rec_type.map((content) => (
              <>
                <SubTitle>{content.type_desc} </SubTitle>
                <RowWrapper>
                  <TitleWrapper>
                    <Title>{content.type_desc_detail}</Title>
                    <ItemTitle2 text={content.type_name} />
                  </TitleWrapper>

                  <TagArray tag={content.type_tag_arr} key={content.id} />
                </RowWrapper>

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
                        <Link
                          to={`/itemdetail/${dicText[content.type_name]}/${
                            content.type_name
                          }/${id}`}
                        >
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
  color: #666666;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`;

const SubTitle2 = styled.div`
  margin-top: 52px;
  color: #666666;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RowWrapper = styled.div`
  width: 920px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 42.75px;
`;

const BrandCardWrapper = styled.div`
  width: 920px;
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 79.82px;

  column-gap: 30px;
  row-gap: 20px;
`;
