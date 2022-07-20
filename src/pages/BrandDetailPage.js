import TopBar from '../components/TopBar';
import styled from 'styled-components';
import background from '../assets/BrandDetailPageAssets/background.png';
import { WidthWrapper } from '../components/WidthWrapper';

const BrandDetailPage = () => {

  return (
  <>
    <WidthWrapper>
      <TopBar opacity={'rgba(0, 0, 0, 0)'} color={'white'} />
      <Wrapper>
        <Container>
          <BrandTitle>Lukt</BrandTitle>
          <Description>건강하고 맛있는 북유럽 식문화를 소개하는 아이슬란딕 요거트 앤 토핑 브랜드입니다</Description>
          <a href={'https://naver.com'}><BrandButton>브랜드 홈 방문하기</BrandButton></a>
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
  position : relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  
  flex-direction: column;
  background-image: url(${background});
  background-size : cover;
`;

const BrandTitle = styled.div`
  position: absolute;
  left: 36.76%;
  right: 46.36%;
  top: 22.65%;
  font-family: 'GT Haptik Trial';
  font-style: normal;
  font-weight: 800;
  font-size: 200px;
  line-height: 160px;
  color: #FFFFFF;
`;

const Description = styled.div`
  position: absolute;
  left: 38%;
  top: 44.84%;
  margin-top: 80px;
  width: 400px;
  text-align : center;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
`;

const BrandButton = styled.div`
  position: absolute;
  left: 38%;
  top: 80%;
  justify-content : space-between;
  width: 400px;
  height: 30px;
  background: #222222;
  /* Grey- 7 */
   
  padding: 12px 16px;
  border: 0.765833px solid #222222;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;

  cursor: pointer;

  :hover{
    top: 79%;
  }
`;