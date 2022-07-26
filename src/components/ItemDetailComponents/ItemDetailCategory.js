import {
  HigherCategory,
  Category,
  CategoryWrapper,
} from './ItemDetailPresenter';
import { Link } from 'react-router-dom';
import ChangeEnglish from '../SharedComponents/ChangeEnglish';

const ItemDetailCategory = ({ text, product, data }) => {
  var titleKorean = ChangeEnglish(text={text});
  var titleProduct = ChangeEnglish(text={product});
  return (
    <>
      <CategoryWrapper>
        <Link to={`/${text}`}>
          <HigherCategory>{titleKorean}</HigherCategory>
        </Link>
        <HigherCategory>{'>'}</HigherCategory>
        <HigherCategory>{product}</HigherCategory>
        <HigherCategory>{'>'}</HigherCategory>
        <Category>룩트 그릭 요거트</Category>
      </CategoryWrapper>
    </>
  );
};

export default ItemDetailCategory;
