import { HigherCategory, Category ,CategoryWrapper} from "./ItemDetailPresenter";

const ItemDetailCategory = ({data}) => {

    return(
        <>
        <CategoryWrapper>
            <HigherCategory>식품</HigherCategory>
            <HigherCategory>{'>'}</HigherCategory>
            <HigherCategory>그릭 요거트</HigherCategory>
            <HigherCategory>{'>'}</HigherCategory>
            <Category>룩트 그릭 요거트</Category>
          </CategoryWrapper>
        </>
    )
}

export default ItemDetailCategory;