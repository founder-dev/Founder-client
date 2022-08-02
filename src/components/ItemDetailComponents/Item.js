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
  ScheduleWrapper,
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
          {data.custom_flag && (
            <Img src={ItemDetailCustom} left={data.product_name.length} />
          )}
        </ItemNameWrapper>
      </CustomLocator>
      <DetailedInfoWrapper>
        <PriceWrapper>
          <DetailedInfo marginBottom={'2.44px'}>최저가</DetailedInfo>
          <Price>{data.min_price} 원</Price>
        </PriceWrapper>
        <ScheduleWrapper>
          <DetailedInfo marginBottom={'7.04px'}>배송 주기</DetailedInfo>
          <Schedule>{data.delivery_cycle_detail}</Schedule>
        </ScheduleWrapper>
      </DetailedInfoWrapper>
    </>
  );
};

export default Item;
