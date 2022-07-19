import styled from 'styled-components';
import MainBanner from '../../assets/MainPageAssets/MainBanner.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BannerButton from './BannerButton';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import './Pagination.css';

SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {
  const swiperProps = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
  };

  return (
    <BannerWrapper>
      <StyledSwiper {...swiperProps}>
        <SwiperSlide>
          <BannerImage src={MainBanner} />
          <BannerButton />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage src={MainBanner} />
          <BannerButton />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage src={MainBanner} />
          <BannerButton />
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
  width: 1440px;
  height: 280px;
`;

const StyledSwiper = styled(Swiper)`
  width: 1440px;
  height: 280px;
`;
