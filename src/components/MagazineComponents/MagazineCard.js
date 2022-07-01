import React from 'react';
import BrandStory from '../../assets/MagazinePageAssets/BrandStory.png';
import styled from 'styled-components';

const MagazineCard = () => {
  return (
    <>
      <CardContainer>
        <Image src={BrandStory} />
        <Chip>#건강</Chip>
        <CardTitle>파운더와 함께하는 간단한 한 끼</CardTitle>
        <SubText>
          기타리스트로 음악씬에 먼저 이름을 알린 후 담담한 본인만의 감성으로 큰
          사랑을 받고 있는 싱어송라이터
        </SubText>
      </CardContainer>
    </>
  );
};

export default MagazineCard;

const Image = styled.img`
  border-radius: 4px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 430px;
  height: 712px;
  margin-bottom: 56px;
`;

const Chip = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  width: 66px;
  height: 32px;
  padding: 4px 12px;
  border-radius: 4px;
`;

const CardTitle = styled.div`
  margin-top: 12px;
  background-color: white;
  color: black;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Pretendard';
`;

const SubText = styled.div`
  margin-top: 4px;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;
