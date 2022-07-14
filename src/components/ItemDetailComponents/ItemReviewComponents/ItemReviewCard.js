import styled from 'styled-components'
import Review from '../../../assets/Review.json';

function ItemReviewCard(){
     
    return(
        <>
        <div>아이템리뷰입니당</div>
        <CardContainer>
         
        </CardContainer>
        </>
     )
}

export default ItemReviewCard;

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 24px 12px;
gap: 12px;
width: 564px;
height: 442px;
background: #FAFAFA;
border-radius: 4px;
`;