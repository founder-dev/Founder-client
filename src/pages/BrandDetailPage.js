import TopBar from '../components/TopBar';
import styled from 'styled-components';
import background from '../assets/BrandDetailPageAssets/background.png';

const BrandDetailPage = () => {
  return (
    <Container>
      <TopBar opacity={'rgba(0, 0, 0, 0)'} color={'white'} />
    </Container>
  );
};

export default BrandDetailPage;

const Container = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100%;
`;
