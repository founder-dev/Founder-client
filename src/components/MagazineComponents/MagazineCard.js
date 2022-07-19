import React from 'react';
import BrandStory from '../../assets/MagazinePageAssets/brandStory.png';
import styled from 'styled-components';
import { color } from '../../lib/theme';
import { ChipWrapper } from '../SharedComponents/ChipPresenter';

const MagazineCard = ({ title, text, tag, curationHeight, imageHeight , image }) => {
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
  height: ${(props) => props.height || '441px'};
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 330px;
  height: ${(props) => props.height || '620px'};
  margin-bottom: 32px;
`;

const Chip = styled.div`
  margin-top: 16px;
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${color.grey[2]};
  width: auto;
  height: 32px;
  padding: 3px 9px;
  border-radius: 2px;

  margin-right: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
`;

const CardTitle = styled.div`
  margin-top: 12px;
  background-color: white;
  color: black;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;

const SubText = styled.div`
  margin-top: 4px;
  justify-content: center;
  background-color: white;
  color: ${color.grey[5]};
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
`;

