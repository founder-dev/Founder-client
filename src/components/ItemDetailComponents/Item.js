import { ItemCategory, ItemName, DetailedInfoWrapper, DetailedInfo, PriceWrapper, Price, Schedule} from "./ItemDetailPresenter";

const Item = ({data}) => {

    return(
        <>
        <ItemCategory>그릭 요거트</ItemCategory>
        <ItemName>룩트 그릭 요거트</ItemName>
        <DetailedInfoWrapper>
        <DetailedInfo>최저가</DetailedInfo>
        <DetailedInfo>배송 주기</DetailedInfo>
        </DetailedInfoWrapper>

        <PriceWrapper>
        <Price>44,380 원</Price>
        <Schedule>1주/2주/4주/6주/2달</Schedule>
        </PriceWrapper>
        </>
    )
}

export default Item;