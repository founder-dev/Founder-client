import React from 'react';
import styled from 'styled-components';
import MagazinePageTitle from '../assets/MagazinePageAssets/MagazinePageTitle.png';
import MyPageTitle from '../assets/MyPageAssets/MyPage.png';
import BeverageTitle from '../assets/CategoryIntroPageAssets/Beverage.png';
import FoodTitle from '../assets/CategoryIntroPageAssets/Food.png';
import GoodsTitle from '../assets/CategoryIntroPageAssets/Goods.png';
import HealthTitle from '../assets/CategoryIntroPageAssets/Health.png';

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

  margin-top: 80px;
  position : fixed;
`;

const PageTitleBar = ({ title }) => {
  if (title === 'Magazine')
    return (
      <Container>
        <img src={MagazinePageTitle} />
      </Container>
    );
  else if (title === 'Food')
    return (
      <Container>
        <img src={FoodTitle} />
      </Container>
    );
  else if (title === 'Health')
    return (
      <Container>
        <img src={HealthTitle} />
      </Container>
    );
  else if (title === 'Beverage')
    return (
      <Container>
        <img src={BeverageTitle} />
      </Container>
    );
  else if (title === 'Goods')
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
