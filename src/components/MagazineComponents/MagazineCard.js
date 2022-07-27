import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';
const MagazineCard = ({ title, text, tag, image }) => {
  return (
    <>
      <CardContainer>
        <Image src={image} loading="lazy" />
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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 330px;
  margin-bottom: 32px;
`;

const Chip = styled.div`
  margin-top: 16px;
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${color.grey[2]};
  height: 34px;
  padding: 3px 9px;
  border-radius: 2px;

  margin-right: 9px;
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

const ChipWrapper = styled.div`
  display: flex;
`;
