import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import MagazineCard from '../components/MagazineCard';

const MagazinePage = () => {
  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <MagazineCard />
    </>
  );
};

export default MagazinePage;
