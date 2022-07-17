import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';
import {
  Container,
  GridWrapper,
  ItemTitle,
  SubTitle,
} from '../components/GridLayout';
import TitleData from '../assets/CategoryTitle.json';
import BrandCard from '../components/BrandCard';

const CategoryIntroPage = ({ title }) => {
  const results = data.filter((items) => items.itemType === title); //백에서 타이틀 데이터와 물건 데이터를 따로 전달함
  const Title = {
    title: [...new Set(results.map((items) => items.itemTitle))],
    subTitle: [...new Set(results.map((items) => items.subTitle))],
  };
  const subTitle = [...new Set(results.map((items) => items.subTitle))];

  const Titledata = TitleData.filter((items) => items.bigcategory === title); //api를 통해서 불러올 타이틀 이름(카테고리마다 다름)
  return (
    <>
      <TopBar />
      <PageTitleBar title={title} />
      <WidthWrapper>
        <Wrapper>
          <Container>
            {Titledata.map(({ id, type_name, type_desc }, i) => (
              <>
                <ItemTitle>{type_name}</ItemTitle>
                <SubTitle>{type_desc}</SubTitle>
                <GridWrapper>
                  {results
                    .filter((items) => items.itemTitle === type_name) //api 호출 후 useEffect 같은 걸로 data를 불러와야됨
                    .map(({ itemName, price, rating, custom, schedule }, i) => (
                      <Link to={`/itemdetail`}>
                        <ProductCard
                          itemName={itemName}
                          price={price}
                          rating={rating}
                          custom={custom}
                          schedule={schedule}
                          key={i}
                        />
                      </Link>
                    ))}
                </GridWrapper>
                <BrandsTitle>{type_name} 브랜드</BrandsTitle>
                <BrandCardWrapper>
                  <BrandCard brandName={'밀앤데일리'} />
                </BrandCardWrapper>
              </>
            ))}
          </Container>
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

const BrandsTitle = styled.div`
  margin-top: 120px;
  color: black;
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: bold;
`;

const BrandCardWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: row;
`;
