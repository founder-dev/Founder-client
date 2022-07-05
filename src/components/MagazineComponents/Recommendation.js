import React from 'react';
import Protein from '../../assets/MagazinePageAssets/Protein.png';
import styled from 'styled-components';

const Recommendation = ({Brand}) => {
  return (
    <CardContainer>
      {Brand.map((brand,i) => brand != undefined && (
      <>
      <Image src={Protein} />
      <SubText>{brand}</SubText>
      </>
      ))}
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
  height: 170px;
  margin-bottom: 24px;

  margin-top:150px;
`;

const SubText = styled.div`
  margin-top: px;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
`;
