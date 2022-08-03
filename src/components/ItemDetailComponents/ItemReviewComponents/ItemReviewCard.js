import { useState } from 'react';
import styled from 'styled-components';
import Review from '../../../assets/json/Review.json';
import DownArrow from '../../../assets/ItemDetailPageAssets/DownArrow.png';
import UpArrow from '../../../assets/ItemDetailPageAssets/UpArrow.png';
import { color, fontsize, fontWeight } from '../../../styles/theme';
import Rated from '../../StarRating/Rated';
import { css } from 'styled-components';

const ItemReviewCard = ({
  text,
  id,
  tag,
  date,
  star,
  main_img,
  review_media,
}) => {
  const userId = String(id).slice(0, 2) + '***';
  const arraytag = String(tag).split(',');

  const [sizes, setSizes] = useState({
    cardHeight: '342px',
    reviewHeight: '56px',
  });

  const photoShow = () => {
    var array = [];
    for (var i = 0; i < review_media.length; i++) {
      array.push(<Image src={review_media[i].review_img} />);
    }

    return array;
  };

  const tagShow = () => {
    var array = [];
    for (var i = 0; i < arraytag.length; i++) {
      array.push(<Tag>{arraytag[i]}</Tag>);
    }

    return array;
  };
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
        cardHeight: '342px',
        reviewHeight: '56px',
      });
  };

  return (
    <>
      <CardContainer sizes={sizes}>
        <DateWriterWrapper>
          <Date>{date.substr(0, 10)}</Date>
          <Writer>{userId}님의 후기</Writer>
        </DateWriterWrapper>

        {sizes.reviewHeight == '56px' ? (
          <>
            <Image src={main_img}></Image>
            <TagWrapper>{tagShow()}</TagWrapper>
            <ReviewPreview sizes={sizes}>{text}</ReviewPreview>
            <Writer>
              더보기
              <MoreButton src={DownArrow} onClick={changeView} />
            </Writer>
          </>
        ) : (
          <>
            <ImageContainer num={review_media.length + 1}>
              <Image src={main_img}></Image>
              {photoShow()}
            </ImageContainer>
            <Rated rating={star} />
            <TagWrapper margin={'30.38px 0px'}>{tagShow()}</TagWrapper>
            <ReviewPreview sizes={sizes}>{text}</ReviewPreview>
            <Writer>
              접기
              <MoreButton src={UpArrow} onClick={changeView} />
            </Writer>
          </>
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
  justify-content: center;
  width: 432px;
  height: ${(props) => props.sizes.cardHeight};

  background: #fafafa;
  border-radius: 3.06333px;
  margin-bottom: 56px;
`;

const DateWriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 9.19149px 18.383px;
  gap: 6.13px;
  margin-bottom: 12px;

  width: 392px;
  height: 19px;
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
  margin-bottom: 12px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: ${(props) => props.margin || '20px 0px'};
  gap: 8px;

  width: 279.23px;
  height: 31px;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 6px;

  width: 88px;
  height: 21px;

  border: 1px solid ${color.grey[7]};
  border-radius: 30.6333px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

const ReviewPreview = styled.div`
  width: 333.9px;
  height: ${(props) => props.sizes.reviewHeight};
  margin-bottom: 12px;

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

const ImageContainer = styled.div`
  ${(props) =>
    props.num == 1
      ? css`
          display: flex;
          justify-content: center;
        `
      : `
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 12px;
  row-gap: 12px;
  margin-bottom: 19.91px;
    `}
`;
