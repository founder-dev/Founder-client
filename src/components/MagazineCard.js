import React from 'react';
import brandStory from '../assets/MagazinePageAssets/brandStory.png';
import TeaTime from '../assets/MagazinePageAssets/TeaTime.png';
import styled from 'styled-components';

const MagazineCard = () => {
  return (
    <>
      <CardContainer>
        <img src={brandStory} />
      </CardContainer>
      <CardContainer>
        <img src={TeaTime} />
      </CardContainer>
    </>
  );
};

export default MagazineCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 430px;
  height: 712px;
  margin-top: 36px;
  margin-bottom: 20px;
`;
