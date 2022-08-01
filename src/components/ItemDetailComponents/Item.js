import {
  CustomLocator,
  ItemNameWrapper,
  Img,
  ItemCategory,
  ItemName,
  DetailedInfoWrapper,
  DetailedInfo,
  PriceWrapper,
  Price,
  Schedule,
} from './ItemDetailPresenter';
import ItemDetailCustom from '../../assets/ItemDetailPageAssets/ItemDetailCustom.png';
import useChangeKorean from '../../hooks/useChangeKorean';

const Item = ({ product, data }) => {
  const titleProduct = useChangeKorean(product); 

  return (
    <>
      <CustomLocator>
        <ItemNameWrapper>
          <ItemCategory>{titleProduct}</ItemCategory>
          <ItemName>{data.product_name}</ItemName>
          {data.custom_flag && <Img src={ItemDetailCustom} />}
        </ItemNameWrapper>
      </CustomLocator>
      <DetailedInfoWrapper>
        <DetailedInfo>최저가</DetailedInfo>
        <DetailedInfo>배송 주기</DetailedInfo>
      </DetailedInfoWrapper>

      <PriceWrapper>
        <Price>{data.min_price} 원</Price>
        <Schedule>{data.delivery_cycle_detail}</Schedule>
      </PriceWrapper>
    </>
  );
};

export default Item;
