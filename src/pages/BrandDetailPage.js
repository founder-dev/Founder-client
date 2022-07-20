import TopBar from '../components/TopBar';
import styled from 'styled-components';
import background from '../assets/BrandDetailPageAssets/background.png';
import { WidthWrapper } from '../components/WidthWrapper';
import { color, fontWeight, fontsize } from '../lib/theme';

const BrandDetailPage = () => {
  return (
    <>
      <WidthWrapper>
        <TopBar opacity={'rgba(0, 0, 0, 0)'} color={'white'} />
        <Wrapper>
          <Container>
            <BrandTitle>Lukt</BrandTitle>
            <Description>
              건강하고 맛있는 북유럽 식문화를 소개하는 아이슬란딕 요거트 앤 토핑
              브랜드입니다
            </Description>
            <a href={'https://naver.com'}>
              <BrandButton>브랜드 홈 방문하기</BrandButton>
            </a>
          </Container>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default BrandDetailPage;

const Container = styled.div`
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;

  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  color: ${color.white};
`;

const BrandTitle = styled.div`
  position: absolute;
  left: 36.76%;
  right: 46.36%;
  top: 22.65%;

  font-family: 'GT Haptik Trial';
  font-style: normal;
  font-weight: ${fontWeight[3]};
  font-size: 200px;
  line-height: 160px;
`;

const Description = styled.div`
  position: absolute;
  left: 38%;
  top: 44.84%;
  margin-top: 80px;
  width: 400px;
  text-align: center;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[4]};
  line-height: 36px;
`;

const BrandButton = styled.div`
  position: absolute;
  left: 38%;
  top: 80%;
  justify-content: space-between;
  width: 400px;
  height: 30px;
  background: ${color.grey[7]};
  /* Grey- 7 */

  padding: 12px 16px;
  border: 0.765833px solid ${color.grey[7]};
  border-radius: 4px;
  color: ${color.white};
  font-weight: ${fontWeight[0]};
  line-height: 28px;

  cursor: pointer;

  :hover {
    top: 79%;
  }
`;
