import React from 'react';
import TopBar from '../components/TopBar';
import styled from 'styled-components';

const MagazineDetailPage = () => {
  return (
    <>
      <TopBar />
      <TitleWrapper>
        <MagazineTitle />
      </TitleWrapper>
      <WidthWrapper>
        <Wrapper></Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazinePage;

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
