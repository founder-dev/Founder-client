import React, { useState } from 'react';
import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import MagazineImage from '../assets/MagazineDetailPageAssets/MagazineImage.png';
import CurationPhoto from '../assets/MagazineDetailPageAssets/CurationPhoto.png';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';
import BrandMovingButton from '../components/SharedComponents/BrandMovingButton';
import axios from 'axios';
import { useEffect } from 'react';

const MagazineDetailPage = () => {
  const { scroll } = useDetectScroll();
  const [magazineDetaildata, setMagazineDetaildata] = useState(null);

  const fetchMagazineDetail = async () => {
    try {
      setMagazineDetaildata(null);
      const response = await axios.get(
        'https://found-er.co.kr/api/magazine/daily-curation/14/'
      );
      setMagazineDetaildata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMagazineDetail();
  }, []);

  if (!magazineDetaildata) return null;
  console.log(magazineDetaildata.magazine_magazinecontent);

  return (
    <>
      <TopBar />

      <Header>
        <HeaderTitle>{magazineDetaildata.title}</HeaderTitle>
        <HorizontalProgress scroll={scroll} />
      </Header>

      <WidthWrapper>
        <Wrapper>
          <img src={MagazineImage} />
          <TitleWrapper>
            <TitleInfo>
              <Title>{magazineDetaildata.title}</Title>
              <KeyWords>
                <text>가치소비 |</text> <text>제로웨이스트 |</text>{' '}
                <text>비건 | </text> <text>유기농</text>
              </KeyWords>
            </TitleInfo>
          </TitleWrapper>

          <DetailWrapper>
            <Editor>editor. {magazineDetaildata.author}</Editor>
            <Date>2022.07.28</Date>
          </DetailWrapper>
          <Centering>
            {magazineDetaildata.magazine_magazinecontent.map((content) => (
              <>
              <ArticleWrapper>
              <ParagraphWrapper>
              <SubTitle>{content.detail_title}</SubTitle>
              <Text>{content.detail_content}</Text>
              </ParagraphWrapper>
              {content.detail_img != null && <Image src={content.detail_img}/>}
              <BrandMovingButton/>
              </ArticleWrapper>
              </>
            ))}
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
  flex-direction: column;
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;

  color: #000000;

  margin-bottom: 80px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 80px;
  width: 920px;
  margin-left: 250px;
`;

const Image = styled.img`
  margin-left: 240px;
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
