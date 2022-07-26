import React from 'react';
import styled from 'styled-components';
import MagazinePageTitle from '../assets/MagazinePageAssets/MagazinePageTitle.png';
import MyPageTitle from '../assets/MyPageAssets/MyPage.png';
import BeverageTitle from '../assets/CategoryIntroPageAssets/Beverage.png';
import FoodTitle from '../assets/CategoryIntroPageAssets/Food.png';
import GoodsTitle from '../assets/CategoryIntroPageAssets/Goods.png';
import HealthTitle from '../assets/CategoryIntroPageAssets/Health.png';

const PageTitleBar = ({ title }) => {
  if (title === 'Magazine')
    return (
      <Container>
        <img src={MagazinePageTitle} />
      </Container>
    );
  else if (title === 'food')
    return (
      <Container>
        <img src={FoodTitle} />
      </Container>
    );
  else if (title === 'health')
    return (
      <Container>
        <img src={HealthTitle} />
      </Container>
    );
  else if (title === 'beverage')
    return (
      <Container>
        <img src={BeverageTitle} />
      </Container>
    );
  else if (title === 'goods')
    return (
      <Container>
        <img src={GoodsTitle} />
      </Container>
    );
  else if (title === 'MyPage')
    return (
      <Container>
        <img src={MyPageTitle} />
      </Container>
    );
};

export default PageTitleBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: white;
  border-bottom: 1px solid black;

  margin-top: 56px;
  position: fixed;
  z-index: 1;
`;
