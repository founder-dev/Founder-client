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
      <Header>
        <HeaderTitle>파운더 사용 설명서</HeaderTitle>
        <HorizontalProgress scroll={scroll} />
      </Header>

      <WidthWrapper>
        <Wrapper>
          <img src={MagazineImage} />
          <TitleWrapper>
            <TitleInfo>
              <Title>파운더 사용 설명서</Title>
              <KeyWords>설문조사 | 카테고리 | 매거진 </KeyWords>
            </TitleInfo>
          </TitleWrapper>

          <DetailWrapper>
            <Editor>editor. 김하린</Editor>
            <Date>2022.03.16</Date>
          </DetailWrapper>
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
  position: fixed;
  width: 100%;
  height: 82px;
  top: 80px;
  background-color: white;
`;

const HeaderTitle = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: black;
  z-index: 2;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const TitleInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 164px;
  top: -173px;

  background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  color: white;

  z-index: 2;
  margin-top: 41px;
  margin-bottom: 21px;
`;

const KeyWords = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;

  text-align: center;

  color: #ffffff;
`;

const DetailWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 211px;
  margin-left: 120px;
  margin-bottom: 84px;
`;

const Date = styled.div`
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 16px;

  color: #878888;
`;
const Editor = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: #000000;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 156px;
  margin-left: 120px;
  width: 960px;
  margin-left: 240px;
`;

const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 32px;

  color: #272727;

  margin-bottom: 48px;
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;

  color: #000000;

  margin-bottom: 156px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 156px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
