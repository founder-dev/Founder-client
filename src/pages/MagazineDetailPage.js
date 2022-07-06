import React from 'react';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import MagazineImage from '../assets/MagazineDetailPageAssets/MagazineImage.png';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';

const MagazineDetailPage = () => {
  const { scroll } = useDetectScroll();

  return (
    <>
      <TopBar />
      <Header />
      <HorizontalProgress scroll={scroll} />
      <WidthWrapper>
        <Wrapper>
          <TitleWrapper>
            <img src={MagazineImage} />
            <Title>파운더 사용 설명서</Title>
            <KeyWords>설문조사 | 카테고리 | 매거진 </KeyWords>
          </TitleWrapper>
          <Editor>김하린</Editor>
          <Date>2022.03.16</Date>
          <ArticleWrapper>
            <ParagraphWrapper>
              <SubTitle>파운더와 함께하는 현물 구독</SubTitle>
              <Text>
                우리는 일상생활 속에서 필요한 물품들에 대해 고정적인 취향이 자리
                잡혀있을 때가 많아요. 우리의 경험을 바탕으로 어떤 물건이 나에게
                가장 잘 맞는지 파악한 후 구매하곤 하죠. 이후에 사용한 경험이
                만족스러웠다면 재구매로까지 이어지기도 합니다. 파운더는 이
                과정을 단순화해주고자 합니다!
              </Text>
            </ParagraphWrapper>
          </ArticleWrapper>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazineDetailPage;

const Header = styled.div`
  position: absolute;
  width: 1440px;
  height: 82px;
  left: 0px;
  top: 80px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 1336px;
  height: 164px;
  left: 52px;
  top: 396px;

  background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  width: 266px;
  height: 36px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;

  text-align: center;

  color: #ffffff;
`;

const KeyWords = styled.div`
  width: 266px;
  height: 36px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;

  text-align: center;

  color: #ffffff;
`;

const Editor = styled.div`
  position: absolute;
  height: 16px;
  left: 8.33%;
  right: 85.35%;
  top: 580px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: #000000;
`;

const Date = styled.div`
  position: absolute;
  height: 16px;
  left: 17.43%;
  right: 77.01%;
  top: 580px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: #878888;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 156px;

  position: absolute;
  width: 1200px;
  height: 3060.77px;
  left: 120px;
  top: 680px;
`;

const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: #272727;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;

  color: #000000;

  margin-bottom: 156px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 156px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  justify-content: center;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
