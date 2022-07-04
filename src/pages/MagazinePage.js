import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import MagazineCard from '../components/MagazineComponents/MagazineCard';
import Recommendation from '../components/MagazineComponents/Recommendation';
import styled from 'styled-components';
import Tag from '../components/Tag';
import data from '../assets/Magazinedata.json';

const MagazinePage = () => {

  const Story = data.filter((items) => items.magazine_type === "파운더 스토리"); //data set
  

  const Curation = data.filter((items) => items.magazine_type === "데일리 큐레이션");
  const Brand = data.map((items) => items.brand);
  console.log(Brand);
  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <WidthWrapper>
        <Wrapper>
          <MagazineCardWrapper>
            <Topic>브랜드 스토리</Topic>
            {Story.map(({ title, text ,magazine_tag_arr} , i) => 
            (
            <MagazineCard 
            title={title} 
            text ={text} 
            tag={magazine_tag_arr} 
            key ={i}/>
            ))
            }
          </MagazineCardWrapper>
          
          <CurationWrapper>
            <Topic>데일리 큐레이션</Topic>
            {Curation.map(({ title, text ,magazine_tag_arr} , i) => 
            (
            <MagazineCard 
            title={title} 
            text ={text} 
            tag={magazine_tag_arr} 
            key ={i}
            curationHeight = "455px"
            imageHeight = "320px"/>
            ))
            }
          </CurationWrapper>

          <RecommendationWrapper>
            <Topic>추천 브랜드</Topic>
            <Recommendation Brand={Brand}/>
          </RecommendationWrapper>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazinePage;

const MagazineCardWrapper = styled.div`
  margin-left: 120px;
`;

const CurationWrapper = styled.div`
  margin: 0px 63px;
`;

const RecommendationWrapper = styled.div`
  margin-right: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  justify-content: space-between;
  padding-top : 150px;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Topic = styled.div`
  margin: 40px 0px 36px 0px;
  color: black;
  font-size: 32px;
  font-family: 'Pretendard';
  font-weight: bold;
`;
