import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { PreviewState } from '../../recoil';
import PhotoIcon from '../../assets/ItemDetailPageAssets/UploadPhoto.jpg';
import SmallPhotoIcon from '../../assets/ItemDetailPageAssets/SmallPhotoIcon.png';
import TrashCan from '../../assets/ItemDetailPageAssets/TrashCan.png';

function UploadPhoto({ photo, setPhoto }) {
  var PhotoArray = [];
  Array.prototype.push.apply(PhotoArray, photo); //배열형식으로 바꿔줌
  const [preview, setPreview] = useRecoilState(PreviewState);
  const [itemHover, setItemHover] = useState(false);

  const uploadPhoto = (e) => {
    setPhoto(e.target.files);

    setPreview((preview) => [
      ...preview,
      URL.createObjectURL(e.target.files[0]),
    ]); //대표이미지만
    setPreview((preview) => [
      ...preview,
      URL.createObjectURL(e.target.files[1]),
    ]);
    setPreview((preview) => [
      ...preview,
      URL.createObjectURL(e.target.files[2]),
    ]);
    setPreview((preview) => [
      ...preview,
      URL.createObjectURL(e.target.files[3]),
    ]);
  };

  const reUploadPhoto = (num) => (e) => {
    setPreview([
      ...preview.slice(0, num),
      URL.createObjectURL(e.target.files[0]),
      ...preview.slice(num + 1),
    ]);

    setPhoto([
      ...PhotoArray.slice(0, num),
      e.target.files[0],
      ...PhotoArray.slice(num + 1),
    ]);
  };

  console.log(itemHover);

  return (
    <>
      {preview[0] == undefined ? (
        <>
          <Photo htmlFor="uploadPhoto" />
          <input
            id="uploadPhoto"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={uploadPhoto}
            style={{ display: 'none' }}
          />
        </>
      ) : (
        <>
          <>
            <PreviewContainer>
              {[0, 1, 2, 3].map((num) => (
                <>
                  <PreviewWrapper
                    onMouseEnter={() => setItemHover(true)}
                    onMouseLeave={() => setItemHover(false)}
                  >
                    <PreviewLabel htmlFor={num}>
                      <Preview photo={preview[num]} />
                      <TrashCanImg itemHover={itemHover} />
                    </PreviewLabel>
                  </PreviewWrapper>
                  <input
                    id={num}
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    onChange={reUploadPhoto(num)}
                    style={{ display: 'none' }}
                  />
                </>
              ))}
            </PreviewContainer>
          </>
        </>
      )}
    </>
  );
}

export default UploadPhoto;

const Photo = styled.label`
  margin-right: 23px;
  background-image: url(${PhotoIcon});
  cursor: pointer;
  width: 478px;
  height: 136px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
`;

const Preview = styled.img`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.photo || SmallPhotoIcon});
  object-fit: cover;
  cursor: pointer;
`;

const PreviewWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  object-fit: cover;
  cursor: pointer;
  margin-right: 12px;
`;

const TrashCanImg = styled.img`
  width: 100px;
  height: 100px;
  ${(props) =>
    props.itemHover === true
      ? css`
          background-image: url(${TrashCan});
        `
      : `
        `}
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
`;

const PreviewLabel = styled.label`
  width: 100px;
  height: 100px;
`;

const PreviewContainer = styled.div`
  width: 448px;
  height: 100px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 16px 21px 20px 21px;
  display: flex;
`;
