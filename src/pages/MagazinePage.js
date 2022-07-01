import React from 'react';
import PageTitleBar from '../components/PageTitleBar';
import TopBar from '../components/TopBar';
import BrandStoryCard from '../components/BrandStoryCard';

const MagazinePage = () => {
  return (
    <>
      <TopBar />
      <PageTitleBar title={'Magazine'} />
      <BrandStoryCard />
    </>
  );
};

export default MagazinePage;
