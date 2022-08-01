import { useEffect, useState } from 'react';
import PageTitleBar from '../components/TopBarComponents/PageTitleBar';
import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import ProductCard from '../components/SharedComponents/ProductCard';
import data from '../assets/json/data.json';
import { Link } from 'react-router-dom';
import {
  Container,
  GridWrapper,
  SubTitle,
} from '../components/SharedComponents/GridLayout';
import TitleData from '../assets/json/CategoryTitle.json';
import ItemTitle from '../components/SharedComponents/ItemTitle';
import BrandTitle from '../components/SharedComponents/BrandTitle';
import BrandCard from '../components/SharedComponents/BrandCard';
import TagArray from '../components/SharedComponents/TagArray';
import Categorydata from '../assets/json/CategoryPage.json';
import Tape from '../assets/CategoryIntroPageAssets/Tape.png';
import { fetchCategoryIntro } from '../API';

const CategoryIntroPage = ({ title }) => {
  const [categoryIntroData, setCategoryIntroData] = useState(null);

  useEffect(() => {
    fetchCategoryIntro(setCategoryIntroData);
  }, []);

  if (!categoryIntroData) return null;

  console.log(categoryIntroData);

  return (
    <>
      <TopBar />
      <PageTitleBar title={title} />
      <WidthWrapper>
        <Wrapper>
          <>
            {categoryIntroData.category_type.map((content) => (
              <>
                <Container>
                  <ItemTitle text={content.type_name} key={content.id} />
                  <SubTitle>
                    {content.type_desc}{' '}
                    <TagArray tag={content.type_tag_arr} key={content.id} />
                  </SubTitle>
                  <GridWrapper>
                    {content.type_product //api 호출 후 useEffect 같은 걸로 data를 불러와야됨
                      .map(
                        ({
                          product_name,
                          min_price,
                          star_rate_avg,
                          custom_flag,
                          delivery_cycle,
                          product_main_img,
                          min_std_price,
                          max_std_price,
                          delivery_cycle_detail,
                        }) => (
                          <Link to={`/itemdetail/food/${content.type_name}`}>
                            <ProductCard
                              itemName={product_name}
                              price={min_price}
                              rating={star_rate_avg}
                              custom={custom_flag}
                              schedule={delivery_cycle}
                              image={product_main_img}
                              min_price={min_std_price}
                              max_price={max_std_price}
                              schedule_detail={delivery_cycle_detail}
                            />
                          </Link>
                        )
                      )}
                  </GridWrapper>
                  <BrandTitle text={content.type_name} />
                  <BrandCardWrapper>
                    {content.type_brand.map(({ brand_name, id }) => (
                      <>
                        <BrandCard brandName={brand_name} key={id} />
                      </>
                    ))}
                  </BrandCardWrapper>
                </Container>
                <TextTape src={Tape} />
              </>
            ))}
          </>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default CategoryIntroPage;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 150px 120px 0px 120px;
`;

const BrandCardWrapper = styled.div`
  margin-top: 18.4px;
  display: flex;
  flex-direction: row;
  margin-bottom: 79.82px;
`;

const TextTape = styled.img`
  width: 100%;
  height: 63px;
`;
