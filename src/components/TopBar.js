import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import coolicon from '../assets/TopBarAssets/coolicon.png';
import whiteCoolicon from '../assets/TopBarAssets/whiteCoolicon.png';
import TopBarButton from './TopBarButton';
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../recoil';
import { color, fontsize, fontWeight } from '../lib/theme';
import { Link } from 'react-router-dom';
import { loginState } from '../recoil';

const TopBar = ({ position, opacity, color }) => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return (
    <Container position={position} opacity={opacity}>
      <Link to={`/`}>
        <HomeText color={color}>홈</HomeText>
      </Link>

      <TextButtonWrapper>
        <CategoryText color={color}>카테고리</CategoryText>
        <DropButton
          menuOpen={menuOpen}
          src={color ? whiteCoolicon : coolicon}
          onMouseEnter={() => setMenuOpen(true)}
        />
      </TextButtonWrapper>
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

      <Link to={`/magazinepage`}>
        <MagazineText color={color} isLoggedIn={isLoggedIn}>
          매거진
        </MagazineText>
      </Link>

      <TopBarButton color={color} />
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
  background-color: ${(props) => props.opacity || 'white'};
  margin-top: ${(props) => props.LogoHeight || '0px'};
  position: ${(props) => props.position || 'fixed'};
  z-index: 2;
  top: 0;
`;

const HomeText = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-left: 590px;
`;

const CategoryText = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  width: 56px;
  margin-right: 6px;
`;

const DropButton = styled.img`
  width: 17px;
  height: 10px;
  cursor: pointer;
  ${(props) =>
    props.menuOpen
      ? css`
          transform: rotate(-180deg);
        `
      : `transform: rotate( 0 );`}
`;

const TextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-left: 80px;
  width: 79px;
`;

const DropdownMenu = styled.ul`
  padding-top: 7.27px;
  display: block;
  height: 218px;
  background-color: white;
  position: absolute;
  transform: translateY(150px);
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const Menu = styled.li`
  padding-top: 20px;
  padding-left: 40px;
  width: 240px;
  height: 50px;
  cursor: pointer;
  :hover {
    background-color: ${color.grey[1]};
    font-weight: ${fontWeight[2]};
  }
  background-color: white;
`;

const MagazineText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-left: 80px;
  margin-right: ${(props) => (props.isLoggedIn ? '271px' : '419px')};

  width: 42px;
`;
