import React, { useState } from 'react';
import TopBar from '../components/TopBarComponents/TopBar';
import styled from 'styled-components';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';
import BrandMovingButton from '../components/SharedComponents/BrandMovingButton';
import axios from 'axios';
import { useEffect } from 'react';
import { color } from '../styles/theme';
import TagShow from '../components/MagazineComponents/TagShow';
import { fetchMagazineDetail } from '../API';
import { useParams } from 'react-router-dom';

const MagazineDetailPage = () => {
  const { scroll } = useDetectScroll();
  const [magazineDetaildata, setMagazineDetaildata] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchMagazineDetail({ setMagazineDetaildata, id });
  }, []);

  if (!magazineDetaildata) return null;

  console.log(magazineDetaildata);

  return (
    <>
      <TopBar />

      <Header>
        <HeaderTitle>{magazineDetaildata.title}</HeaderTitle>
        <HorizontalProgress scroll={scroll} />
      </Header>

      <WidthWrapper>
        <Wrapper>
          <HeaderImg src={magazineDetaildata.img_header} />
          <TitleWrapper>
            <TitleInfo>
              <Title>{magazineDetaildata.title}</Title>
              <KeyWords>
                <TagShow tag_arr={magazineDetaildata.tag_arr} />
              </KeyWords>
            </TitleInfo>
          </TitleWrapper>

          <DetailWrapper>
            <Editor>editor. {magazineDetaildata.author}</Editor>
            <Date>{magazineDetaildata.created_at.substr(0, 10)}</Date>
          </DetailWrapper>
          <Centering>
            {magazineDetaildata.magazine_magazinecontent.map((content) => (
              <>
                <ArticleWrapper key={content.id}>
                  <ParagraphWrapper>
                    <SubTitle>{content.detail_title}</SubTitle>
                    <Text>{content.detail_content}</Text>
                  </ParagraphWrapper> 
                 {content.detail_img != null && (
                    <Image src={content.detail_img} />
                  )}
                  {content.brand != null && <BrandMovingButton id={content.brand} />}
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

const HeaderImg = styled.img`
  width: 1336px;
  height: 396px;
  margin-left: 52px;
`;

const HeaderTitle = styled.div`
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
  width: 1336px;
  height: 172px;
  top: -172px;
  margin-left: 52px;
  background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  line-height: 48px;
  color: white;
  z-index: 2;
  margin-top: 36px;
`;

const KeyWords = styled.div`
  font-size: 20px;
  line-height: 36px;
  font-weight: 500;
  text-align: center;

  color: ${color.grey[2]};

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
  font-weight: 400;
  font-size: 16px;

  color: #878888;
`;
const Editor = styled.div`
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
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  color: #272727;

  margin-top: 84px;
  margin-bottom: 46px;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 20px;
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
  margin-left: 120px;
  width: 1200px;
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
