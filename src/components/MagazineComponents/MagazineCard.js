import React from 'react';
import BrandStory from '../../assets/MagazinePageAssets/brandStory.png';
import styled from 'styled-components';
import { color } from '../../lib/theme';

const MagazineCard = ({ title, text, tag, curationHeight, imageHeight }) => {
  console.log(tag);
  return (
    <>
      <CardContainer height={curationHeight}>
        <Image src={BrandStory} height={imageHeight} />
        <ChipWrapper>
          <Chip># {tag[0]}</Chip>
          <Chip># {tag[1]}</Chip>
          <Chip># {tag[2]}</Chip>
        </ChipWrapper>
        <CardTitle>{title}</CardTitle>
        <SubText>{text}</SubText>
      </CardContainer>
    </>
  );
};

export default MagazineCard;

const Image = styled.img`
  border-radius: 4px;
  height: ${(props) => props.height || '560px'};
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 430px;
  height: ${(props) => props.height || '712px'};
  margin-bottom: 56px;
`;

const Chip = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.grey[2]};
  width: 66px;
  height: 32px;
  padding: 4px 12px;
  border-radius: 2px;

  margin-right: 12px;
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

const ChipWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
