import styled from "styled-components";
import { color } from "../../lib/theme";

function InputText({review , setReview}){
  
  
    const inputReview = (e) => {
        setReview(e.target.value);
        console.log(review);
      };

    
    return(
    <>
    <InputReview
    type="text"
    value={review}
    onChange={inputReview}
    maxLength="300"
    size="100"
    />
    </>
  )
}

export default InputText;

const InputReview = styled.textarea`
  box-sizing: border-box;
  padding: 19px 25px 33px 18px;
  resize: none;
  width: 1078px;
  height: 164px;
  margin-top: 48px;
  margin-left: 61px;

  font-family: 'Pretendard';
  border: 1px solid ${color.grey[3]};
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
