import { useState } from 'react';
import styled from 'styled-components';
import Review from '../../../assets/json/Review.json';
import { color } from '../../../styles/theme';
import DownArrow from '../../../assets/ItemDetailPageAssets/DownArrow.png';
import UpArrow from '../../../assets/ItemDetailPageAssets/UpArrow.png';

const ItemReviewCard = () => {
  const [sizes, setSizes] = useState({
    cardHeight: '336.96px',
    reviewHeight: '56px',
  });

  const changeView = () => {
    if (sizes.reviewHeight == '56px') {
      // 닫혀있는경우
      setSizes({
        cardHeight: 'auto',
        reviewHeight: 'auto',
      });
    } // 열려있는경우
    else
      setSizes({
        cardHeight: '336.96px',
        reviewHeight: '56px',
      });
  };

  return (
    <>
      <CardContainer sizes={sizes}>
        <DateWriterWrapper>
          <Date>2022.07.16.</Date>
          <Writer>abc****</Writer>
        </DateWriterWrapper>
        <Image></Image>
        <TagWrapper>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
        </TagWrapper>
        <ReviewPreview sizes={sizes}>
          늘 맛있게 먹고 있어요...절대 단종하지 마세요 저 숨참습니다... 진짜
          참아요...늘 맛있게 먹고 있어요...절대 단종하지 마세요 저 숨참습니다...
          진짜 참아요...
        </ReviewPreview>
        {sizes.reviewHeight == '56px' ? (
          <Writer>
            더보기
            <MoreButton src={DownArrow} onClick={changeView} />
          </Writer>
        ) : (
          <Writer>
            접기
            <MoreButton src={UpArrow} onClick={changeView} />
          </Writer>
        )}
      </CardContainer>
    </>
  );
};

export default ItemReviewCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 18.38px 9.19px;
  gap: 9.19px;
  margin-top: 72px;

  width: 431.93px;
  height: ${(props) => props.sizes.cardHeight};

  background: #fafafa;
  border-radius: 3.06333px;
`;

const DateWriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15.3167px 18.38px 6.12667px;
  gap: 6.13px;

  width: 395.17px;
  height: 40.44px;
`;
const Date = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${color.grey[4]};
`;

const Writer = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${color.grey[5]};
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 9.19px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 8px;

  width: 279.23px;
  height: 47px;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  gap: 6px;

  width: 88.25px;
  height: 31px;

  border: 0.765833px solid #222222;
  border-radius: 30.6333px;
`;

const ReviewPreview = styled.div`
  width: 333.9px;
  height: ${(props) => props.sizes.reviewHeight};

  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #000000;

  overflow: hidden;
`;

const MoreButton = styled.img`
  margin-left: 10.71px;
  cursor: pointer;
`;
