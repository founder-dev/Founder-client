import SmallPhotoIcon from '../../assets/ItemDetailPageAssets/1.png';
import TrashCan from '../../assets/ItemDetailPageAssets/TrashCan.png';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';

function PreviewPresenter({ num, preview, setPreview, setPhoto, PhotoArray }) {
  function deletePhoto() {
    console.log('edited');
  }

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

  const [itemHover, setItemHover] = useState(false);
  return (
    <PreviewLabel
      htmlFor={num}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <Preview photo={preview[num]} />
      {itemHover == true && preview[num] == undefined ? (
        <input
          id={num}
          type="file"
          accept="image/*"
          multiple="multiple"
          onChange={reUploadPhoto(num)}
          style={{ display: 'none' }}
        />
      ) : (
        <></>
      )}
      <TrashCanImg itemHover={itemHover} photo={preview[num]} />
    </PreviewLabel>
  );
}

export default PreviewPresenter;

const Preview = styled.img`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.photo || SmallPhotoIcon});
  object-fit: cover;
  cursor: pointer;
`;

const TrashCanImg = styled.img`
  width: 100px;
  height: 100px;
  ${(props) =>
    props.itemHover === true && props.photo !== undefined
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
  margin-right: 12px;
  position: relative;
`;
