import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import MagazineCard from '../components/MagazineComponents/MagazineCard';
import Recommendation from '../components/MagazineComponents/Recommendation';
import styled from 'styled-components';
import Tag from '../components/Tag';
import data from '../assets/Magazinedata.json';
import { useEffect } from 'react';

const MagazinePage = () => {

  const magazineData = [];
  /*useEffect(() => {
    const fetchMagazine = async () => {
      try {
        const response = await axios.get(
          'https://pounder/api/magazine/'
        );
        magazineData = response.data;
      } catch (e) {
        console.log(e);
      }
    };
    fetchMagazine();
  }, []); */

  const Story = data.filter((story) => story.magazine_type === "파운더 스토리"); //magazineData 이름바꾸기
  const Curation = data.filter((curation) => curation.magazine_type === "데일리 큐레이션");
  const Brand = data.map((items) => items.brand);
  /*api 통신하면 브랜드 부분은 
  const brandName = Curation.map((brand) => brand.brand_name));
  const brandLink = Curation.map((brand) => brand.brand_link));
  const brandLogo = Curation.map((brand) => brand.brand_logo)); // 이 부분 브랜드에도 추가해줘야됨
  */
  console.log(Brand);
  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <WidthWrapper>
        <Wrapper>
          <MagazineCardWrapper>
            <Topic>브랜드 스토리</Topic>
            {Story.map(({ title, intro_content ,tag_arr , main_img} , i) => 
            (
            <MagazineCard 
            title={title} 
            text ={intro_content} 
            tag={tag_arr}
            image={main_img} 
            key ={i}/>
            ))
            }
          </MagazineCardWrapper>
          
          <CurationWrapper>
            <Topic>데일리 큐레이션</Topic>
            {Curation.map(({ title, intro_content , tag_arr , main_img} , i) => 
            (
            <MagazineCard 
            title={title} 
            text ={intro_content} 
            tag={tag_arr}
            image={main_img}  
            key ={i}
            curationHeight = "475px"
            imageHeight = "320px"/>
            ))
            }
          </CurationWrapper>

          <RecommendationWrapper>
            <Topic>추천 브랜드</Topic>
            <Recommendation 
            Brand={Brand}/>
          </RecommendationWrapper>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazinePage;

const MagazineCardWrapper = styled.div`
  margin-left: 245px;
`;

const CurationWrapper = styled.div`
  margin: 0px 46px;
`;

const RecommendationWrapper = styled.div`
  margin-right: 245px;
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
  margin: 70px 0px 22px 0px;
  color: black;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;
