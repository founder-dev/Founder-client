import React from 'react';
import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import MagazineImage from '../assets/MagazineDetailPageAssets/MagazineImage.png';
import CurationPhoto from '../assets/MagazineDetailPageAssets/CurationPhoto.png';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';
import BrandMovingButton from '../components/SharedComponents/BrandMovingButton';

const MagazineDetailPage = () => {
  const { scroll } = useDetectScroll();

  const magazineDetaildata = [];

  /*useEffect(() => {
    const fetchMagazineDetail = async () => {
      try {
        const response = await axios.get(
          'https://pounder/api/magazine/{pk}/'
        );
        magazineDetaildata = response.data;
      } catch (e) {
        console.log(e);
      }
    };
    fetchMagazineDetail();
  }, []); 
  
  {magazineDetaildata.title} 이런식으로 쓰면됨
  */

  return (
    <>
      <TopBar />

      <Header>
        <HeaderTitle>
          여러분의 가치로운 소비를 위한 철학을 담은 브랜드 추천
        </HeaderTitle>
        <HorizontalProgress scroll={scroll} />
      </Header>

      <WidthWrapper>
        <Wrapper>
          <img src={MagazineImage} />
          <TitleWrapper>
            <TitleInfo>
              <Title>
                여러분의 가치로운 소비를 위한 철학을 담은 브랜드 추천
              </Title>
              <KeyWords>
                <text>가치소비 |</text> <text>제로웨이스트 |</text>{' '}
                <text>비건 | </text> <text>유기농</text>
              </KeyWords>
            </TitleInfo>
          </TitleWrapper>

          <DetailWrapper>
            <Editor>editor. 김하린</Editor>
            <Date>2022.03.16</Date>
          </DetailWrapper>
          <Centering>
            <ArticleWrapper>
              <ParagraphWrapper>
                <SubTitle>파운더와 함께하는 현물 구독</SubTitle>
                <Text>
                  우리는 일상생활 속에서 필요한 물품들에 대해 고정적인 취향이
                  자리 잡혀있을 때가 많아요. 우리의 경험을 바탕으로 어떤 물건이
                  나에게 가장 잘 맞는지 파악한 후 구매하곤 하죠. 이후에 사용한
                  경험이 만족스러웠다면 재구매로까지 이어지기도 합니다. 파운더는
                  이 과정을 단순화해주고자 합니다!
                </Text>
              </ParagraphWrapper>
              <img src={CurationPhoto} />
              <BrandMovingButton/>
            </ArticleWrapper>
          </Centering>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MagazineDetailPage;

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  top: 56px;
  background-color: white;
  z-index: 3;
`;

const HeaderTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: black;
  z-index: 2;
  margin-top: 19px;
  margin-bottom: 21px;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const TitleInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 172px;
  top: -172px;

  background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  line-height: 48px;

  color: white;

  z-index: 2;
  margin-top: 36px;
`;

const KeyWords = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;
  line-height: 36px;
  font-weight: 500;

  text-align: center;

  color: #ffffff;

  margin-top: 16px;
  gap: 12px;
`;

const DetailWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 211px;
  margin-left: 120px;
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

const Centering = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
`;
const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  justify-content: center;
`;

const BrandHome = styled.div`
  position: relative;
  width: 1200px;
  height: 132px;

  margin-top: 80px;
  margin-bottom: 156px;

  background: #fafafa;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  color: #272727;

  margin-top: 84px;
  margin-bottom: 46px;
`;

const Text = styled.text`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;

  color: #000000;

  margin-bottom: 80px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 80px;
  width: 700px;
  margin-left: 250px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1440px;
  padding-top: 118px;
  padding-bottom: 235px;
`;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
