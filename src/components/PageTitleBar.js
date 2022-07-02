import React from 'react';
import styled from 'styled-components';
import MagazinePageTitle from '../assets/MagazinePageAssets/MagazinePageTitle.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: white;
  border-bottom-height: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const PageTitleBar = ({ title }) => {
  if (title === 'Magazine')
    return (
      <Container>
        <img src={MagazinePageTitle} />
      </Container>
    );
};

export default PageTitleBar;
