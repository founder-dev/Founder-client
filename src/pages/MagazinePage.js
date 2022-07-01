import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import MagazineCard from '../components/MagazineComponents/MagazineCard';
import Recommendation from '../components/MagazineComponents/Recommendation';
import styled from 'styled-components';

const MagazinePage = () => {
  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <WidthWrapper>
        <Wrapper>
          <MagazineCardWrapper>
            <Topic>브랜드스토리</Topic>
            <MagazineCard />
          </MagazineCardWrapper>
          <CurationWrapper>
            <Topic>데일리큐레이션</Topic>
            <MagazineCard />
          </CurationWrapper>
          <RecommendationWrapper>
            <Topic>추천 상품</Topic>
            <Recommendation />
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
  justify-content: center;
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
