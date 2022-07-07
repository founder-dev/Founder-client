import React from 'react';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import MagazineImage from '../assets/MagazineDetailPageAssets/MagazineImage.png';
import CurationPhoto from '../assets/MagazineDetailPageAssets/CurationPhoto.png';
import Arrow from '../assets/MagazineDetailPageAssets/Arrow.png';
import Logo from '../assets/MagazineDetailPageAssets/Logo.png';
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
            <img src={CurationPhoto} />

            <BrandHome>
              <BrandInfoWrapper>
                <BrandLogo src={Logo} />
                <TextWrapper>
                  <BrandName>{`톤 28 (TOUN 28)`}</BrandName>
                  <BrandDetail>
                    플라스틱을 줄여 동물들을 살리는, 친환경 바를거리
                  </BrandDetail>
                </TextWrapper>
              </BrandInfoWrapper>

              <BrandButton>
                브랜드 홈 방문하기
                <BrandArrow src={Arrow} />
              </BrandButton>
            </BrandHome>
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
  z-index: 3;
`;

const HeaderTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: black;
  z-index: 2;
  margin-top: 31px;
  margin-bottom: 31px;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const TitleInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 164px;
  top: -164px;

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
  margin-bottom: 8px;
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

const BrandHome = styled.div`
  position: relative;
  width: 1200px;
  height: 132px;

  margin-top: 56px;
  margin-bottom: 156px;

  padding: 0px 25px 0px 36px;

  background: #fafafa;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
`;
const BrandInfoWrapper = styled.div`
  position: relative;
`;

const BrandLogo = styled.img`
  margin: 20px 32px 0px 0px;
  position: absolute;
  top: 10px;
`;

const TextWrapper = styled.div`
  position: absolute;
  align-items: column;
  width: 683px;
  top: 26px;
  left: 160px;
`;

const BrandName = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 28px;
`;

const BrandDetail = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 26px;
`;

const BrandButton = styled.div`
  width: 240px;
  height: 54px;
  position: absolute;
  top: 26px;
  left: 935px;
  border-radius: 4px;
  border: 1px;
  border-style: solid;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  padding: 13px 21.01px 13px 21.1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandArrow = styled.img`
  margin: 15.94px 0px 14.83px 30.77px;
`;

const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 32px;

  color: #272727;

  margin-bottom: 48px;
`;

const Text = styled.text`
  font-family: 'Pretendard';
  font-size: 20px;

  color: #000000;

  margin-bottom: 156px;
`;

const ParagraphWrapper = styled.div`
  margin-top: 76px;
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding-top: 162px;
  padding-bottom: 235px;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
