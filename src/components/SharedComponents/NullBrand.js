import BrandCard from './BrandCard';
import comingsoon from '../../assets/MainPageAssets/comingsoon.png';

const NullBrand = ({ num }) => {
  const comingSoon = (num) => {
    let array = [];
    let lineNum = 1;

    if (num > 5) {
      lineNum = 2;
    }

    for (let i = 0; i < 5 * lineNum - num; i++) {
      array.push(
        <BrandCard
          brandName="커밍쑨"
          brandLogo={comingsoon}
          comingsoon={true}
        />
      );
    }

    return array;
  };

  return num < 10 && num > 0 && num != 5 && <>{comingSoon(num)}</>;
};

export default NullBrand;
