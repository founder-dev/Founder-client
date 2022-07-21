import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import coolicon from '../assets/TopBarAssets/coolicon.png';
import whiteCoolicon from '../assets/TopBarAssets/whiteCoolicon.png';
import TopBarButton from './TopBarButton';
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../recoil';
import { color, fontsize, fontWeight } from '../lib/theme';
import { Link } from 'react-router-dom';

const TopBar = ({ position, opacity, color }) => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  return (
    <Container position={position} opacity={opacity}>
      <Wrapper>
        <IconWrapper>
          <MainMenu>
            <Link to={`/`}>
              <HomeText color={color}>홈</HomeText>
            </Link>

            <CategoryText color={color}>카테고리</CategoryText>
            <DropButton
              menuOpen={menuOpen}
              src={color ? whiteCoolicon : coolicon}
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

            <Link to={`/magazinepage`}>
              <MagazineText color={color}>매거진</MagazineText>
            </Link>
          </MainMenu>
          <SideMenu>
            <TopBarButton color={color} />
          </SideMenu>
        </IconWrapper>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  justify-content: flex-end;
`;

const MainMenu = styled.div`
  width: 299px;
  height: 28px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 797px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 52px 24px 0px;
`;

const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-right: 78px;
`;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-right: 8px;
`;

const MagazineText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: ${fontWeight[2]};
  margin-left: 56px;
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
