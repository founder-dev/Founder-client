import React from 'react';
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

const CategoryIntroPage = ({ title }) => {
  const results = data.filter((items) => items.itemType === title); //백에서 타이틀 데이터와 물건 데이터를 따로 전달함
  const Titledata = TitleData.filter((items) => items.bigcategory === title); //api를 통해서 불러올 타이틀 이름(카테고리마다 다름)

  //새롭게 만든 백엔드 데이터에 맞춘 new mapping!
  const type = Categorydata.category_detail.map((items) => items.type);
  const items = Categorydata.category_detail.map(
    (items) => items.type_detail.product
  );
  const brands = Categorydata.category_detail.map(
    (items) => items.type_detail.brand
  );

  console.log(items);

  return (
    <>
      <TopBar />
      <PageTitleBar title={title} />
      <WidthWrapper>
        <Wrapper>
          <>
            {type.map(
              (
                { id, type_name, type_desc, type_tag_arr, type_img_order },
                i
              ) => (
                <>
                  <Container>
                    <ItemTitle text={type_name} key={id} />
                    <SubTitle>
                      {type_desc} <TagArray tag={type_tag_arr} key={id} />
                    </SubTitle>
                    <GridWrapper>
                      {items[i] //api 호출 후 useEffect 같은 걸로 data를 불러와야됨
                        .map(
                          ({
                            product_name,
                            std_price,
                            star_rate_avg,
                            custom_flag,
                            delivery_cycle_main,
                            product_main_img,
                          }) => (
                            <Link to={`/itemdetail/${title}/${type_name}`}>
                              <ProductCard
                                itemName={product_name}
                                price={std_price}
                                rating={star_rate_avg}
                                custom={custom_flag}
                                schedule={delivery_cycle_main}
                                image={product_main_img}
                                key={id}
                              />
                            </Link>
                          )
                        )}
                    </GridWrapper>
                    <BrandTitle text={type_name} />
                    <BrandCardWrapper>
                      {brands[i].map(({ brand_name, id }) => (
                        <>
                          <BrandCard brandName={brand_name} key={id} />
                        </>
                      ))}
                    </BrandCardWrapper>
                  </Container>
                  <TextTape src={Tape} />
                </>
              )
            )}
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
