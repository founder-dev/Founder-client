import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Custom from '../assets/ItemDetailPageAssets/Custom.png';
import CancleButtonImage from '../assets/ItemDetailPageAssets/CancleButtonImage.png';
import WeeklyMonthly from '../assets/ItemDetailPageAssets/WeeklyMonthly.png';
import { color, fontsize, fontWeight } from '../lib/theme';
import TagSelect from '../components/WriterModalComponents/TagSelect';
import Rating from '../components/StarRating/Rating';
import { useRecoilState } from 'recoil';
import { TagState , PreviewState } from '../recoil';
import { Container, Background } from '../components/ModalDesign';
import InputText from '../components/WriterModalComponents/InputText';
import UploadPhoto from '../components/WriterModalComponents/UploadPhoto';

const WriterModal = ({ setOpenModal }) => {
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useRecoilState(PreviewState);
  const [tagLength, setTagLength] = useState(false);
  const [tagArray, setTagArray] = useRecoilState(TagState);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFood, setIsFood] = useState(true);
  
  //axios get 통신을 통해 get으로 아이템에 대한 id,cost를 받을 예정

  const uploadPhoto = (e) => {
    setPhoto(e.target.files);
    console.log(photo);
    setPreview(URL.createObjectURL(e.target.files[0])); //대표이미지만
    console.log(preview);
  };

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append('reviewMedia', photo);
    formdata.append('star_rate', hoverRating);
    formdata.append('review_text', review);
    formdata.append('review_tag_arr', tagArray);
    formdata.append('review_main_img', preview);
    //axios post통신을 통해 해당 아이템에 대한 정보들을 보낼 예정
    /* headers: {
    "Content-Type": `multipart/form-data; `,
    */
  };

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

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
            <UploadPhoto photo={photo} setPhoto={setPhoto}/>
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
            color={(34, 34, 34, 1)}
          >
            구독 서비스의 총 별점을 남겨주세요.
          </Instruction>
          <RatingContainer>
            <StarRating>
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <Rating
                    index={index}
                    rating={rating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating}
                  />
                );
              })}
            </StarRating>

            {[1, 2, 3, 4, 5].map((num) => (
              <HiddenText key={num} show={hoverRating === num}>
                {textList[num - 1]}
              </HiddenText>
            ))}
          </RatingContainer>
          {isFood && 
          <>
          <Instruction
            weight={500}
            margin={'55px 0px 0px 61px'}
            color={(255, 63, 63, 1)}
            tagLength={tagLength}
          >
            {tagLength
              ? '3개 이하의 태그를 골라주세요.'
              : '1개 이상의 태그를 골라주세요.'}
          </Instruction>
          <TagSelect setTagLength={setTagLength} />
          </>
          }
          <InputText review={review} setReview={setReview}/>
          <LengthText top = {isFood}>{review.length} / 300자</LengthText>
          <SubmitButtonWrapper>
            <SubmitButton onClick={handleSubmit}>작성완료</SubmitButton>
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

const Instruction = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 20px;

  margin: ${(props) => props.margin}; 

  color: ${color.grey[7]};

  ${(props) =>
    props.tagLength
      ? css`
        color: #FF3F3F;
        `
      : `color: ${color.grey[7]};`}
`;

const ItemBoxWrapper = styled.div`
  width: 1068px;
  height: 120px;
  margin: 11px 71px 0px 61px;
  display: flex;
  justify-content: space-between;
`;

const ItemBox = styled.div`
width: 916px;

padding: 26px 32px; 25px; 576px;

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

const RatingContainer = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 61px;
`;

const StarRating = styled.div`
  display: flex;
  width: 189px;
  height: 30.38px;
`;

const textList = [
  '별로에요',
  '그저 그래요',
  '보통이에요',
  '좋아요',
  '아주 좋아요',
];

const HiddenText = styled.div`
  margin-left: 21px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  color: #222222;

  ${({ show }) => (show ? `display:block` : `display:none`)}
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
          top:750px;
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

  width: 480px;
  height: 68px;
  background-color: ${color.grey[1]};
  color: ${color.grey[3]};
  border: none;
`;
