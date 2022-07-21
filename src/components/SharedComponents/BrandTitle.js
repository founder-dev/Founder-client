import styled from 'styled-components';
import ChangeEnglish from './ChangeEnglish';

function BrandTitle({ text }) {
  var Hangeul = ChangeEnglish((text = { text }));

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
