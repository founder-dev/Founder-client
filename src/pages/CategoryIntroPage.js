import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';

const CategoryIntroPage = ({ title }) => {
  const results = data.filter((items) => items.itemType === title); //백에서 타이틀 데이터와 서브 타이틀 데이터를 따로 전달함
  const Title = [...new Set(results.map((items) => items.itemTitle))];
  const subTitle = [...new Set(results.map((items) => items.subTitle))];

  return (
    <>
      <TopBar />
      <PageTitleBar title={title} />
      <WidthWrapper>
        <Wrapper>
          {Title.map((title) => (
            <>
              <ItemTitle>{title}</ItemTitle>
              {subTitle.map((subTitle) => (
                <>
                  <SubTitle>{subTitle}</SubTitle>

                  <GridWrapper>
                    {results
                      .filter((items) => items.itemTitle === title)
                      .map(
                        ({ itemName, price, rating, custom, schedule }, i) => (
                          <Link  to={`/itemdetail`}>
                          <ProductCard
                            itemName={itemName}
                            price={price}
                            rating={rating}
                            custom={custom}
                            schedule={schedule}
                            key={i}
                          />
                          </Link>
                        )
                      )}
                  </GridWrapper>
                  <BrandsTitle>{title} 브랜드</BrandsTitle>
                  <BrandsContainer>
                    <BrandName>브랜드이름</BrandName>
                  </BrandsContainer>
                </>
              ))}
            </>
          ))}
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

const ItemTitle = styled.div`
  margin-top: 48px;
  color: black;
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 48px;
  color: black;
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: bold;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 36px;
  row-gap: 60px;
`;
const BrandsTitle = styled.div`
  margin-top: 120px;
  color: black;
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: bold;
`;
const BrandsContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 120px;
  width: 208px;
  height: 203px;
  background-color: gray;
`;

const BrandName = styled.div`
  color: black;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: bold;
`;
