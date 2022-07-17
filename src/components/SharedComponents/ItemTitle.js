import styled from "styled-components";
import ChangeEnglish from "./ChangeEnglish";

function ItemTitle({text}){
     
    var Hangeul = ChangeEnglish(text={text});

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