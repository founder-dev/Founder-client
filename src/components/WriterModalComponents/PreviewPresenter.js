import SmallPhotoIcon from '../../assets/ItemDetailPageAssets/SmallPhotoIcon.png';
import TrashCan from '../../assets/ItemDetailPageAssets/TrashCan.png';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';

function PreviewPresenter({ num, preview }) {
  const [itemHover, setItemHover] = useState(false);
  return (
    <PreviewLabel
      htmlFor={num}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <Preview photo={preview[num]} />
      <TrashCanImg itemHover={itemHover} />
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
  margin-right: 12px;
  position: relative;
`;
