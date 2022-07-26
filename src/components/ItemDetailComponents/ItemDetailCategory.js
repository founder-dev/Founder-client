import {
  HigherCategory,
  Category,
  CategoryWrapper,
} from './ItemDetailPresenter';
import { Link } from 'react-router-dom';
import useChangeKorean from '../../hooks/useChangeKorean';

const ItemDetailCategory = ({ title, product, data }) => {
  var titleKorean = useChangeKorean(title);
  var titleProduct = useChangeKorean(product);
  return (
    <>
      <CategoryWrapper>
        <Link to={`/${title}`}>
          <HigherCategory>{titleKorean}</HigherCategory>
        </Link>
        <HigherCategory>{'>'}</HigherCategory>
        <HigherCategory>{titleProduct}</HigherCategory>
        <HigherCategory>{'>'}</HigherCategory>
        <Category>룩트 그릭 요거트</Category>
      </CategoryWrapper>
    </>
  );
};

export default ItemDetailCategory;
