import styled from 'styled-components';
import useChangeKorean from '../../hooks/useChangeKorean';

function BrandTitle({ text }) {
  var Hangeul = useChangeKorean(text);

  return <BrandsTitle>{Hangeul} 브랜드</BrandsTitle>;
}

export default BrandTitle;

const BrandsTitle = styled.div`
  margin-top: 80px;
  color: black;
  font-weight: 700;
  font-size: 20px;
  line-height: 30.67px;
`;
