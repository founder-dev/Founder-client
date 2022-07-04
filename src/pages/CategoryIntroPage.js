import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import data from '../assets/data.json';

const CategoryIntroPage = ({ title }) => {
  const results = data.filter((items) => items.itemType === title); //data set
  const Title = [...new Set(results.map((items) => items.itemTitle))];
  const Description = [...new Set(results.map((items) => items.description))];
  console.log(Description);
  return (
    <>
      <TopBar />
      <PageTitleBar title={title} />
      <WidthWrapper>
        <Wrapper>
          {Title.map((title , m)=>(
          <>
          <ItemTitle>{title}</ItemTitle>
    
            <GridWrapper>
            {(results.filter((items) => items.itemTitle === title)).map(({ itemName, price, rating, custom, schedule } , i) => (
              <ProductCard
                itemName={itemName}
                price={price}
                rating={rating}
                custom={custom}
                schedule={schedule}
                key={i}
              />
            ))}
            </GridWrapper>
            
            <div>{title} 브랜드 이미지들 들어갈 예정</div>
            </>
            ))}

        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default CategoryIntroPage; //최적화 해야될듯

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  margin-top: 48px;
  color: black;
  font-size: 36px;
  font-family: 'Pretendard';
  font-weight: bold;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 36px;
  row-gap: 60px;
`;

const description = styled.div`
`;

const RecommendationWrapper = styled.div``;

const Topic = styled.div`
  color: black;
  font-size: 32px;
  font-family: 'Pretendard';
  font-weight: bold;
`;
