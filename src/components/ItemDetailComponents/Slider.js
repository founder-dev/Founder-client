import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Photo1 from '../../assets/ItemDetailPageAssets/Photo1.png';
import Photo2 from '../../assets/ItemDetailPageAssets/Photo2.png';
import Photo3 from '../../assets/ItemDetailPageAssets/Photo3.png';
import Photo4 from '../../assets/ItemDetailPageAssets/Photo4.png';
import Photo5 from '../../assets/ItemDetailPageAssets/Photo5.png';
import Slide from './Slide';
import Forward from '../../assets/ItemDetailPageAssets/Forward.png';
import Backward from '../../assets/ItemDetailPageAssets/Backward.png';

const TOTAL_SLIDES = 4;

export default function Slider({ main, media }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const mediaPhoto = media.filter((items)=>items != '').map((items) => items.review_img);
  
  const photoArray = [
    ...main,
    ...mediaPhoto,
  ];

  console.log(mediaPhoto);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 3) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const photoShow = () => {
    var array = [];
    for (var i = 0; i < photoArray.length; i++) {
      array.push(<Slide img={photoArray[i]} />);
    }

    return array;
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${
      currentSlide * 100 * 0.23
    }%)`;
  }, [currentSlide]);

  return (
    <Container>
      <ForwardButton src={Forward} onClick={PrevSlide} />
      <SliderWrapper>
        <SliderContainer ref={slideRef}>{photoShow()}</SliderContainer>
      </SliderWrapper>

      <BackwardButton src={Backward} onClick={NextSlide} />
    </Container>
  );
}
const Container = styled.div`
  width: 433.35px;
  height: 76.58px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SliderWrapper = styled.div`
  width: 340px;
  height: 76px;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
`;

const SliderContainer = styled.div`
  width: 340px;
  height: 76px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ForwardButton = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16.02px;
`;

const BackwardButton = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 7px;
`;
