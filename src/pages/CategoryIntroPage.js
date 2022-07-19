import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';
import { Container, GridWrapper, SubTitle } from '../components/GridLayout';
import TitleData from '../assets/CategoryTitle.json';
import ItemTitle from '../components/SharedComponents/ItemTitle';
import BrandTitle from '../components/SharedComponents/BrandTitle';
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
                <ItemTitle text={type_name} />
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
                <BrandTitle text={type_name} />
                <BrandsContainer>
                  <BrandCard brandName={'밀앤데일리'} />
                </BrandsContainer>
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

const BrandsContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 120px;
  width: 208px;
  height: 203px;
`;

const BrandCardWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: row;
`;
