import React from 'react';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import MagazineImage from '../assets/MagazineDetailPageAssets/MagazineImage.png';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';

const MagazineDetailPage = () => {
  const { scroll } = useDetectScroll();

  return (
    <>
      <TopBar />
      <TitleWrapper>
        <MagazineTitle>파운더와 함께하는 간단한 한 끼</MagazineTitle>
      </TitleWrapper>
      <HorizontalProgress scroll={scroll} />
      <WidthWrapper>
        <Wrapper>
          <img src={MagazineImage} />
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazineDetailPage;

const MagazineTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Pretendard';
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: white;
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
