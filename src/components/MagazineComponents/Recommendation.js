import React from 'react';
import Protein from '../../assets/MagazinePageAssets/Protein.png';
import styled from 'styled-components';

const Recommendation = () => {
  return (
    <CardContainer>
      <Image src={Protein} />
      <SubText>달콤 요거트 프롬 그릭데이</SubText>
    </CardContainer>
  );
};

export default Recommendation;

const Image = styled.img`
  border-radius: 4px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 216px;
  height: 204px;
  margin-bottom: 24px;
`;

const SubText = styled.div`
  margin-top: px;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;
