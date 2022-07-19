import React from 'react';
import Toun from '../../assets/MagazinePageAssets/Toun.png';
import styled from 'styled-components';

const Recommendation = ({ title }) => {
  return (
    <CardContainer>
      <Image src={Toun} />
      <SubText>{title}</SubText>
    </CardContainer>
  );
};

export default Recommendation;

const Image = styled.img`
  border-radius: 4px;
  width: 165px;
  height: 165px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  margin-bottom: 16px;
`;

const SubText = styled.div`
  margin-top: 4px;
  justify-content: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
  line-height: 28px;

  font-style: normal;
  font-weight: 500;
`;
