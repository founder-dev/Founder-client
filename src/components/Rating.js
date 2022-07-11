import React, { useState } from 'react';
import styled from 'styled-components';

const Score = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  /*const goToFetch = (e) => {
    setClicked(e.target.id);
    fetch(`http://10.58.3.24:8000/products/1`, {
      //사용할 http 메소드
      method: 'POST',
      //토큰
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU',
      },
      //서버에 보낼 데이터 (별점)
      body: JSON.stringify({
        rating: e.target.id,
      }),
    });
  };
  */

  return (
    <ReviewBox>
      {[1, 2, 3, 4, 5].map((num) => (
        <HiddenText key={num} show={hovered === num}>
          {textList[num - 1]}
        </HiddenText>
      ))}

      <StarContainer>
        {[1, 2, 3, 4, 5].map((el) => (
          <i
            className={`fas fa-star ${
              (clicked >= el) | (hovered >= el) && 'blackStar'
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setClicked(el)}
          />
        ))}
      </StarContainer>
    </ReviewBox>
  );
};

export default Score;

//style-component 사용
const textList = [
  '별로에요',
  '그저 그래요',
  '보통이에요',
  '좋아요',
  '아주 좋아요',
];

const ReviewBox = styled.div`
  width: 189px;
  height: 30.38px;
  i {
    margin: 15px 7.87px 57.62px 0px;
    opacity: 0.1;
    cursor: pointer;
    font-size: 25px;
  }

  .blackStar {
    color: black;
    opacity: 1;
  }
`;

const StarContainer = styled.div`
  text-align: center;
  border: none;
  background-color: white;
`;

const HiddenText = styled.p`
  position: absolute;
  height: 36px;
  left: 271px;
  top: 391px;
  font-family: 'Pretendard';
  color: black;
  font-size: 20px;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;
