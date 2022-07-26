import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Custom from '../assets/ItemDetailPageAssets/Custom.png';
import CancleButtonImage from '../assets/ItemDetailPageAssets/CancleButtonImage.png';
import WeeklyMonthly from '../assets/ItemDetailPageAssets/WeeklyMonthly.png';
import { color, fontsize, fontWeight } from '../lib/theme';
import TagSelect from '../components/WriterModalComponents/TagSelect';
import { useRecoilState } from 'recoil';
import { TagState, PreviewState } from '../recoil';
import { Container, Background } from '../components/ModalDesign';
import InputText from '../components/WriterModalComponents/InputText';
import UploadPhoto from '../components/WriterModalComponents/UploadPhoto';
import Check from '../assets/ItemDetailPageAssets/CheckRate.png';
import Warning from '../assets/ItemDetailPageAssets/Warning.png';
import { Instruction } from '../components/WriterModalComponents/WriterModalPresenter';
import RatingContainer from '../components/WriterModalComponents/RatingContainer';

const WriterModal = ({ setOpenModal }) => {
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useRecoilState(PreviewState);
  const [tagLength, setTagLength] = useState(false);
  const [tagArray, setTagArray] = useRecoilState(TagState);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFood, setIsFood] = useState(true);
  const [sent, setSent] = useState(false);
  //axios get 통신을 통해 get으로 아이템에 대한 id,cost를 받을 예정

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append('reviewMedia', photo.splice(1,photo.length()));
    formdata.append('star_rate', rating);
    formdata.append('review_text', review);
    formdata.append('review_tag_arr', tagArray);
    formdata.append('review_main_img', photo[0]);
    //axios post통신을 통해 해당 아이템에 대한 정보들을 보낼 예정
    /* headers: {
    "Content-Type": `multipart/form-data; `,
    */
  };

  console.log(preview);
  console.log(photo);

  useEffect(() => {
    if (
      review != '' &&
      rating > 0 &&
      tagArray.length <= 3 &&
      tagArray[0] != '' &&
      photo != undefined
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
          weight={700}
          margin={'46px 0px 0px 61px '}
          color={(34, 34, 34, 1)}
        >
          제품 사진을 촬영/업로드해 주세요.
        </Instruction>
        <form>
          <ItemBoxWrapper>
            <UploadPhoto photo={photo} setPhoto={setPhoto} />
            <ItemBox>
              <ItemName>룩트 그릭 요거트</ItemName>
              <DetailWrapper>
                <DetailBox>
                  <DetailGray>배송주기</DetailGray>
                  <DetailBlack>주간/월간</DetailBlack>
                </DetailBox>
                <DetailBox>
                  <DetailGray>최저가</DetailGray>
                  <DetailBlack>44,380원</DetailBlack>
                </DetailBox>
              </DetailWrapper>
            </ItemBox>
          </ItemBoxWrapper>

          <Instruction
            weight={500}
            margin={'48px 0px 0px 61px'}
            color={rating == 0 ? '(34,34,34,1)' : '#007DFE'}
          >
            구독 서비스의 총 별점을 남겨주세요.
            {rating == 0 ? null : <CheckButton src={Check} />}
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

const ModalBlock = styled.div`
  position: absolute;
  width: 1200px;
  height: 992px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ScheduleSticker = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  left: 986px;
  top: 114px;
`;

const CustomSticker = styled.img`
  position: absolute;
  width: 111.96px;
  height: 50.68px;
  left: 1040px;
  top: 190px;
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  margin: 38px 0px 0px 61px;

  color: rgba(39, 39, 39, 1);
`;

const CancleImg = styled.img`
  position: absolute;
  top: 42px;
  right: 71px;
  bottom: 914px;
  left: 1093px;
`;

const ItemBoxWrapper = styled.div`
  width: 1068px;
  height: 120px;
  margin: 11px 71px 0px 61px;
  display: flex;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  width: 534px;
  height: 104px;
  padding-top: 32px;
  padding-left: 32px;
  border-radius: 4px;
  background-color: rgba(250, 250, 250, 1);
`;

const DetailWrapper = styled.div`
  width: 312px;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: rgba(102, 102, 102, 1);

  height: 36px;
`;

const DetailBox = styled.div`
  margin-top: 5px;
  display: flex;
  height: 32px;
`;

const DetailGray = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: rgba(136, 136, 136, 1);

  margin-right: 12px;
`;

const DetailBlack = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;

rgba(102, 102, 102, 1);
`;

const LengthText = styled.div`
  position: absolute;
  width: 119px;
  height: 24px;
  left: 1002px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${color.grey[4]};
  ${(props) =>
    props.top
      ? css`
          top: 750px;
        `
      : `top:570px;`}
`;

const SubmitButtonWrapper = styled.div`
  width: 100%-61px;
  height: 68px;
  margin: 39px 31px 0px 31px;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 108px;
  gap: 10px;
  border-radius: 4px;
  font-size: 20px;

  width: 480px;
  height: 68px;

  background-color: ${(props) => (props.disabled ? '#FAFAFA' : '#007DFE')};
  color: ${color.grey[3]};
  border: none;
`;

const CheckButton = styled.img`
  padding-left: 8px;
  width: 20px;
  height: 19.2px;
`;
