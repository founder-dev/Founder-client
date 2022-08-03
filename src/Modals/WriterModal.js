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

const WriterModal = ({ setOpenModal, id, name, schedule, minPrice }) => {
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useRecoilState(PreviewState);
  const [tagLength, setTagLength] = useState(false);
  const [tagArray, setTagArray] = useRecoilState(TagState);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFood, setIsFood] = useState(true);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append('reviewMedia', photo.splice(0, photo.length()));
    formdata.append('star_rate', rating);
    formdata.append('review_text', review);
    formdata.append('review_tag_arr', tagArray);
    formdata.append('review_main_img', photo[0]);

    const postLink = `https://found-er.co.kr/api/product/${id}/review`;
    const accessToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5NDk4NzcwLCJqdGkiOiI5M2M0YzcxYTI5Mjc0YzgxYjM5MmI0NzdiYjQ5YWY0MSIsInVzZXJfaWQiOjQxfQ.QCuJZy3LF0WVoPo5hs2k71GKDwNnQFxSJarA2VcUC1c';
    axios
      .post(
        { postLink },
        {
          reviewMedia: formdata.reviewMedia,
          star_rate: formdata.star_rate,
          review_text: formdata.review_text,
          review_tag_arr: formdata.review_tag_arr,
          review_img_main: formdata.review_img_main,
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
        console.log(error);
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

  return (
    <Container>
      <Background />
      <ModalBlock>
        <ScheduleSticker src={WeeklyMonthly} />
        <CustomSticker src={Custom} />

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
        <form>
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
            <SubmitButton onClick={handleSubmit} disabled={!sent}>
              작성완료
            </SubmitButton>
          </SubmitButtonWrapper>
        </form>
      </ModalBlock>
    </Container>
  );
};

export default WriterModal;
