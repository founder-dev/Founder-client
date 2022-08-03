import styled from 'styled-components';
import Banner1 from '../../assets/MainPageAssets/Banner1.png';
import Banner2 from '../../assets/MainPageAssets/Banner2.png';
import Banner3 from '../../assets/MainPageAssets/Banner3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BannerButton from './BannerButton';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import './Pagination.css';
import { Link } from 'react-router-dom';

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
          <BannerImage src={Banner1} />
          <BannerButton />
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/brandstory/6`}>
            <BannerImage src={Banner2} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/brandstory/14`}>
            <BannerImage src={Banner3} />
          </Link>
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
  height: 320px;
`;

const StyledSwiper = styled(Swiper)`
  width: 1440px;
  height: 320px;
`;
