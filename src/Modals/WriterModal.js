import React, { useEffect, useState } from 'react';
import Custom from '../assets/ItemDetailPageAssets/Custom.png';
import CancleButtonImage from '../assets/ItemDetailPageAssets/CancleButtonImage.png';
import WeeklyMonthly from '../assets/ItemDetailPageAssets/WeeklyMonthly.png';
import TagSelect from '../components/WriterModalComponents/TagSelect';
import { useRecoilState } from 'recoil';
import { TagState, PreviewState } from '../recoil';
import {
  Container,
  Background,
} from '../components/ModalComponents/ModalDesign';
import InputText from '../components/WriterModalComponents/InputText';
import UploadPhoto from '../components/WriterModalComponents/UploadPhoto';
import Check from '../assets/ItemDetailPageAssets/CheckRate.png';
import Warning from '../assets/ItemDetailPageAssets/Warning.png';
import {
  ModalBlock,
  ScheduleSticker,
  CustomSticker,
  Title,
  CancleImg,
  ItemBoxWrapper,
  ItemBox,
  DetailWrapper,
  ItemName,
  DetailBox,
  DetailGray,
  DetailBlack,
  LengthText,
  SubmitButtonWrapper,
  SubmitButton,
  CheckButton,
  Essential,
  Instruction,
} from '../components/WriterModalComponents/WriterModalPresenter';
import RatingContainer from '../components/WriterModalComponents/RatingContainer';
import axios from 'axios';
import Weekly from '../assets/ProductCardAssets/Weekly.png';

const WriterModal = ({
  setOpenModal,
  id,
  name,
  schedule,
  minPrice,
  custom,
  delivery,
  title,
}) => {
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useRecoilState(PreviewState);
  const [tagLength, setTagLength] = useState(false);
  const [tagArray, setTagArray] = useRecoilState(TagState);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFood, setIsFood] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('star_rate', String(rating));
    formdata.append('reviewMedia', photo[0]);
    formdata.append('review_text', review);
    formdata.append('review_tag_arr', tagArray);
    formdata.append('review_img_main', photo[0]);

    console.log(formdata);
    const postLink = `https://found-er.co.kr/api/product/${id}/review`;
    const accessToken = localStorage.getItem('accesstoken');
    console.log(accessToken);
    axios
      .post(
        `https://found-er.co.kr/api/product/${id}/review`,
        {
          formdata,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        window.alert('후기 완!');
        console.log(response);
      })

      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    if (
      review !== '' &&
      rating > 0 &&
      tagArray.length <= 3 &&
      tagArray[0] !== '' &&
      photo !== undefined
    ) {
      setSent(true);
    } else {
      setSent(false);
    }
  });

  useEffect(() => {
    if (title == 'beverage' || title == 'food') {
      setIsFood(true);
    }
  }, []);

  console.log(title);
  return (
    <Container>
      <Background />
      <ModalBlock>
        {
          <ScheduleSticker
            src={delivery == 'weekly' ? Weekly : WeeklyMonthly}
          />
        }
        {custom && <CustomSticker src={Custom} />}

        <CancleImg
          src={CancleButtonImage}
          onClick={() => {
            setOpenModal(false);
          }}
        />

        <Title>후기 작성하기</Title>
        <Instruction
          weight={500}
          margin={'46px 0px 0px 61px '}
          color={(34, 34, 34, 1)}
        >
          제품 사진을 촬영/업로드해 주세요.
          <Essential>*필수</Essential>
        </Instruction>
        <form onSubmit={handleSubmit}>
          <ItemBoxWrapper>
            <UploadPhoto photo={photo} setPhoto={setPhoto} />
            <ItemBox>
              <ItemName>{name}</ItemName>
              <DetailWrapper>
                <DetailBox>
                  <DetailGray>배송주기</DetailGray>
                  <DetailBlack>{schedule}</DetailBlack>
                </DetailBox>
                <DetailBox>
                  <DetailGray>최저가</DetailGray>
                  <DetailBlack>{minPrice}</DetailBlack>
                </DetailBox>
              </DetailWrapper>
            </ItemBox>
          </ItemBoxWrapper>

          <Instruction
            weight={500}
            margin={'48px 0px 0px 61px'}
            color={rating === 0 ? '(34,34,34,1)' : '#007DFE'}
          >
            구독 서비스의 총 별점을 남겨주세요.
            {rating === 0 ? null : <CheckButton src={Check} />}
          </Instruction>

          <RatingContainer
            rating={rating}
            hoverRating={hoverRating}
            setRating={setRating}
            setHoverRating={setHoverRating}
          />

          {isFood && (
            <>
              <Instruction
                weight={500}
                margin={'55px 0px 0px 61px'}
                color={
                  tagArray[0] == null
                    ? (255, 63, 63, 1)
                    : tagLength
                    ? '#ff3f3f'
                    : '#007DFE'
                }
                tagLength={tagLength}
              >
                {tagLength
                  ? '3개 이하의 태그를 골라주세요.'
                  : '1개 이상의 태그를 골라주세요.'}

                {tagArray[0] == null ? null : tagLength ? (
                  <CheckButton src={Warning} />
                ) : (
                  <CheckButton src={Check} />
                )}
              </Instruction>
              <TagSelect setTagLength={setTagLength} />
            </>
          )}
          <InputText review={review} setReview={setReview} />
          <LengthText top={isFood}>{review.length} / 300자</LengthText>
          <SubmitButtonWrapper>
            <SubmitButton type="submit" disabled={!sent}>
              작성완료
            </SubmitButton>
          </SubmitButtonWrapper>
        </form>
      </ModalBlock>
    </Container>
  );
};

export default WriterModal;
