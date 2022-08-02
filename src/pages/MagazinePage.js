import React from 'react';
import PageTitleBar from '../components/TopBarComponents/PageTitleBar';
import TopBar from '../components/TopBarComponents/TopBar';
import MagazineCard from '../components/MagazineComponents/MagazineCard';
import Recommendation from '../components/MagazineComponents/Recommendation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchMagazine } from '../API';
import { useState, useEffect } from 'react';

const MagazinePage = () => {
  const [magazineData, setMagazineData] = useState(null);

  useEffect(() => {
    fetchMagazine(setMagazineData);
  }, []);

  if (!magazineData) return null;

  console.log(magazineData);

  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <WidthWrapper>
        <Wrapper>
          <MagazineCardWrapper>
            <Topic>브랜드 스토리</Topic>
            {magazineData.founder_story.map(
              ({ title, intro, tag_arr, img_main, id }) => (
                <Link to={`/brandstory/${id}`}>
                  <MagazineCard
                    title={title}
                    text={intro}
                    tag={tag_arr}
                    image={img_main}
                    key={id}
                  />
                </Link>
              )
            )}
          </MagazineCardWrapper>

          <CurationWrapper>
            <Topic>데일리 큐레이션</Topic>
            {magazineData.daily_curation.map(
              ({ title, intro, tag_arr, img_main, id }) => (
                <Link to={`/brandstory/${id}`}>
                <MagazineCard
                  title={title}
                  text={intro}
                  tag={tag_arr}
                  image={img_main}
                  key={id}
                />
                </Link>
              )
            )}
          </CurationWrapper>

          <RecommendationWrapper>
            <Topic>추천 브랜드</Topic>
            {magazineData.magazine_brand.map(
              ({ brand_name, id, brand_img_logo }) => (
                <Recommendation
                  title={brand_name}
                  key={id}
                  id={id}
                  img={brand_img_logo}
                />
              )
            )}
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
  padding-top: 150px;
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
