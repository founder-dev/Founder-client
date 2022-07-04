import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import coolicon from '../assets/TopBarAssets/coolicon.png';
import TopBarButton from './TopBarButton';
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../recoil';
import {color, fontsize, fontWeight} from '../lib/theme';

import { Link } from 'react-router-dom';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  return (
    <Container>
      <HomeText>홈</HomeText>

      <CategoryText>카테고리</CategoryText>
      <DropButton
        menuOpen={menuOpen}
        src={coolicon}
        onMouseEnter={() => setMenuOpen(true)}
      />
      {menuOpen ? (
        <DropdownMenu onMouseLeave={() => setMenuOpen(false)}>
          <Link to={`/food`}>
            <Menu>식품</Menu>
          </Link>
          <Link to={`/beverage`}>
            <Menu>음료</Menu>
          </Link>
          <Link to={`/goods`}>
            <Menu>생필품</Menu>
          </Link>
          <Link to={`/health`}>
            <Menu>건강</Menu>
          </Link>
        </DropdownMenu>
      ) : null}

      <MagazineText>매거진</MagazineText>
      <TopBarButton />
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: white;

  position : fixed;
`;

const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: ${fontWeight[2]};
  margin-right: 78px;
`;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: ${fontWeight[2]};
  margin-right: 8px;
`;

const MagazineText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: ${fontWeight[2]};
  margin-left: 56px;
`;

const DropButton = styled.img`
  cursor: pointer;
  ${(props) =>
    props.menuOpen
      ? css`
          transform: rotate(-180deg);
        `
      : `transform: rotate( 0 );`}
`;

const DropdownMenu = styled.ul`
  display: block;
  width: 280px;
  height: 240px;
  background-color: white;
  position: absolute;
  transform: translateY(160px);
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const Menu = styled.li`
  padding-top: 20px;
  padding-left: 40px;
  width: 240px;
  height: 80px;
  cursor : pointer;
  :hover{
    background-color : ${color.grey[1]};
    font-weight: ${fontWeight[2]};
  }
  background-color : white;
`;
