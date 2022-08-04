import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { PreviewState } from '../../recoil';
import PhotoIcon from '../../assets/ItemDetailPageAssets/UploadPhoto.jpg';

import PreviewPresenter from './PreviewPresenter';
function UploadPhoto({ photo, setPhoto }) {
  var PhotoArray = [];
  Array.prototype.push.apply(PhotoArray, photo); //배열형식으로 바꿔줌
  const [preview, setPreview] = useRecoilState(PreviewState);

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

  console.log(preview);

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
                  <PreviewPresenter
                    num={num}
                    setPhoto={setPhoto}
                    PhotoArray={PhotoArray}
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

const PreviewContainer = styled.div`
  width: 448px;
  height: 100px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 16px 21px 20px 21px;
  display: flex;
`;

const HoverWrapper = styled.div`
  width: 100px;
  height: 100px;
`;
