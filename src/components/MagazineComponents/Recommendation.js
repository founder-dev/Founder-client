import React from 'react';
import Toun from '../../assets/MagazinePageAssets/Toun.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Recommendation = ({ title, img, id }) => {
  return (
    <Link to={`/branddetail/${id}`}>
      <CardContainer>
        <Image src={img} />
      </CardContainer>
      <SubText>{title}</SubText>
    </Link>
  );
};

export default Recommendation;

const Image = styled.img`
  border-radius: 4px;
  width: 136.37px;
  height: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 165px;
  margin-bottom: 3px;
  background-color: #f2f2f2;
`;

const SubText = styled.div`
  margin-bottom: 16px;
  justify-content: center;
  color: black;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
`;
