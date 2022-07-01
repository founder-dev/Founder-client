import React from 'react';
import Protein from '../assets/MagazinePageAssets/Protein.png';
import styled from 'styled-components';

const MagazineCard = () => {
  return (
    <>
      <CardContainer>
        <Image src={Protein} />
        <SubText />
      </CardContainer>
    </>
  );
};

export default MagazineCard;

const Image = styled.img`
  border-radius: 4px;
`;

//height업데이트되면 추가
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 215px;
  margin-bottom: 24px;
`;

//margin top 업데이트되면 추가
const SubText = styled.div`
  margin-top: px;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;
