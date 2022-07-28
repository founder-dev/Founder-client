import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { fontWeight, color, fontsize } from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { TagState } from '../../recoil';
import React from 'react';

function TagSelect({ setTagLength }) {
  const [tagArray, setTagArray] = useRecoilState(TagState);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const selectTag = (num) => (e) => {
    e.preventDefault();
    var selectedTag = selected.filter((items) => items === true);

    if (selectedTag.length < 3 && selected[num] === false) {
      setSelected([
        ...selected.slice(0, num),
        !selected[num],
        ...selected.slice(num + 1),
      ]);

      setTagArray((tagArray) => [...tagArray, e.target.value]);
    } else if (selectedTag.length === 3 && selected[num] === false) {
      setTagLength(true);
    } else if (selectedTag.length <= 3 && selected[num] === true) {
      setTagLength(false);
      setSelected([
        ...selected.slice(0, num),
        !selected[num],
        ...selected.slice(num + 1),
      ]);
      setTagArray(tagArray.filter((tags) => tags !== e.target.value));
    }
  };

  return (
    <TagBox>
      <Tag value="고소해요" onClick={selectTag(0)} selected={selected[0]}>
        ♥ 고소해요
      </Tag>
      <Tag value="달콤해요" onClick={selectTag(1)} selected={selected[1]}>
        ♥ 달콤해요
      </Tag>
      <Tag value="시큼해요" onClick={selectTag(2)} selected={selected[2]}>
        ♥ 시큼해요
      </Tag>
      <Tag value="촉촉해요" onClick={selectTag(3)} selected={selected[3]}>
        ♥촉촉해요
      </Tag>
      <Tag value="퍽퍽해요" onClick={selectTag(4)} selected={selected[4]}>
        ♥ 퍽퍽해요
      </Tag>
      <Tag value="싱거워요" onClick={selectTag(5)} selected={selected[5]}>
        ♥ 싱거워요
      </Tag>
      <Tag value="담백해요" onClick={selectTag(6)} selected={selected[6]}>
        ♥ 담백해요
      </Tag>
      <Tag value="깔끔해요" onClick={selectTag(7)} selected={selected[7]}>
        ♥ 깔끔해요
      </Tag>
      <Tag value="매콤해요" onClick={selectTag(8)} selected={selected[8]}>
        ♥ 매콤해요
      </Tag>
      <Tag value="부드러워요" onClick={selectTag(9)} selected={selected[9]}>
        ♥ 부드러워요
      </Tag>
      <Tag value="짭짤해요" onClick={selectTag(10)} selected={selected[10]}>
        ♥ 짭짤해요
      </Tag>
      <Tag value="써요" onClick={selectTag(11)} selected={selected[11]}>
        ♥ 써요
      </Tag>
      <Tag value="떫어요" onClick={selectTag(12)} selected={selected[12]}>
        ♥ 떫어요
      </Tag>
      <Tag value="비려요" onClick={selectTag(13)} selected={selected[13]}>
        ♥ 비려요
      </Tag>
      <Tag value="꾸덕해요" onClick={selectTag(14)} selected={selected[14]}>
        ♥ 꾸덕해요
      </Tag>
      <Tag value="든든해요" onClick={selectTag(15)} selected={selected[15]}>
        ♥ 든든해요
      </Tag>
    </TagBox>
  );
}

export default React.memo(TagSelect);

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 1044px;
  height: 92px;
  margin: 13px 0px 0px 61px;
  flex-wrap: wrap;
`;

const Tag = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;

  height: 40px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: ${fontWeight[0]};
  font-size: ${fontsize[2]};
  color: ${color.grey[7]};
  line-height: 24px;
  border: 1px solid #222222;
  border-radius: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  ${(props) =>
    props.selected
      ? css`
          color: #179dff;
          border: 1px solid #179dff;
          background-color: white;
        `
      : `background-color: white;`}
`;
