import styled from 'styled-components';
import useChangeKorean from '../../hooks/useChangeKorean';

function ItemTitle2({ text }) {
  var Hangeul = useChangeKorean(text);

  return <Title>{Hangeul}</Title>;
}
export default ItemTitle2;

export const Title = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 800;
`;
