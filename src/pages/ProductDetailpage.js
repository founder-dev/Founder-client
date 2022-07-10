import TopBar from '../../src/components/TopBar';
import styled from 'styled-components';
import { WidthWrapper, Wrapper } from '../components/WidthWrapper';
import { color , fontsize, fontWeight} from '../lib/theme';
import ItemDetail from '../assets/ItemDetail.json';

function ProductDetailPage(){
  //ItemDetail.json 파일 만들어서 가져오기
    return(
        <WidthWrapper>
        <Wrapper>
        <TopBar/>
        <Type>식품</Type>
        <Type padding={"45px"}>그릭 요거트</Type>
        <Type padding={"45px"}>룩트 그릭 요거트</Type>
        <ProductImage/>
        </Wrapper>
        </WidthWrapper> 
    )
};

export default ProductDetailPage;

const ProductImage = styled.img`
  position: absolute;
  width: 618px;
  height: 618px;
  left: 120px;
  top: 238px;
`;

const Type = styled.div`
  color :black;
  position: absolute;
  width: 100px;
  height: 36px;
  left: 120px;
  top: 162px;
  font-weight : ${fontWeight[0]};
  line-height: 36px;
  color : ${color.grey[3]};
  font-size : ${fontsize[3]};

  padding-left : ${(props) => (props.padding) || "0px"};
`;

