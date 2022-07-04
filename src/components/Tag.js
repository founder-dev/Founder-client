import styled from "styled-components";
import { fontsize, fontWeight , color} from "../lib/theme";
const Container = styled.div`
  width : 66px;
  height : 32px;
  border-radius : 2px;
  background-color : ${color.grey[2]};
`;

const Text = styled.span`
   font-size : ${fontsize[1]};
   font-weight : ${fontWeight[1]};
`

function Tag({text}){

    return(
        <Container>
          <Text>{text}</Text>
        </Container>
    );

}

export default Tag;