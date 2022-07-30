import styled from "styled-components";
import useChangeKorean from "../../hooks/useChangeKorean";

function ItemTitle({text}){
     
    var Hangeul = useChangeKorean(text);

    return(
        <Title>{Hangeul}</Title>
    )
}
export default ItemTitle;


export const Title = styled.div`
  margin-top: 48px;
  color: black;
  font-size: 24px;
  font-weight: 800;
`;