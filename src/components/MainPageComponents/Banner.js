import styled from 'styled-components';
import MainBanner from '../../assets/MainPageAssets/MainBanner.png';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil';
import { color, fontsize, fontWeight } from '../../lib/theme';
import { Link } from 'react-router-dom';
import KaKaoCode from '../KakaoCode';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import BannerButton from './BannerButton';

const Banner = () => {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <BannerWrapper>
      <StyledSwiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      navigation
      pagination={{ clickable: true }}
    >
        <SwiperSlide>
          <BannerImage  src={MainBanner} />
          <BannerButton/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage  src={MainBanner} />
          <BannerButton/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage  src={MainBanner} />
          <BannerButton/>
        </SwiperSlide>
     </StyledSwiper>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  position: relative;
`;
const BannerImage = styled.img`
  width: 1441px;
  height: 280px;
`;

const StyledSwiper = styled(Swiper)`
  width: 1441px;
  height: 280px;
`;
