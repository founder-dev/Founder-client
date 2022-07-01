import React from 'react';
import styled from 'styled-components';
import coolicon from '../assets/TopBarAssets/coolicon.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: white;
`;

const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-right: 78px;
`;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-right: 8px;
`;

const MagazineText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-left: 56px;
`;

const TopBar = () => {
  return (
    <Container>
      <HomeText>홈</HomeText>
      <CategoryText>카테고리</CategoryText>
      <img src={coolicon} />
      <MagazineText>매거진</MagazineText>
    </Container>
  );
};

export default TopBar;
