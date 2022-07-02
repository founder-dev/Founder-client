import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  width: 60rem;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WriterModal = ({ setOpenModal }) => {

  const [starRate , setStarRate] = useState("");
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  
  //axios get 통신을 통해 get으로 아이템에 대한 id,cost를 받을 예정 

  const inputReview = (e)=>{
    setReview(e.target.value);
    console.log(review);
  }

  const uploadPhoto = (e) =>{
    setPhoto(e.target.files);
    console.log(photo);
    setPreview(URL.createObjectURL(e.target.files[0])); //대표이미지만
    console.log(preview);
  }

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append('photo', photo);
    formdata.append('starRate', starRate);
    formdata.append('review', review);
    //axios post통신을 통해 해당 아이템에 대한 정보들을 보낼 예정
    /* headers: {
    "Content-Type": `multipart/form-data; `,
    */
  }

  }
  
  return (
    <Container>
      <Background />
      <ModalBlock>
        <Contents>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <div>후기 작성하기</div>
          <div>아이템,가격 나올 예정 </div>
          <button>startRate</button>
          <form>
            <input
            type = 'text'
            value = {review}
            onChange={inputReview}
            />
             {photo && (
             <img
             alt="sample"
             src={preview}
             style={{ margin: "auto"}}
             />)
             } 
            <input
           type ='file'
           accept='image/*'
           multiple
           onChange={uploadPhoto}
           />
           <button onClick={handleSubmit}>작성완료</button>
            </form>
        </Contents>
      </ModalBlock>
    </Container>
  );
};

export default WriterModal;
