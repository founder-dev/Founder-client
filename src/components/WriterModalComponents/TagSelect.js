import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { fontWeight, color, fontsize } from '../../lib/theme';
import {useRecoilState} from 'recoil';
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
  ]);

  const selectTag = (num) => (e) => {
    
    e.preventDefault();
    var selectedTag = selected.filter((items) => items === true);

    if(selectedTag.length  < 3 && selected[num] === false){
        setSelected([
        ...selected.slice(0, num),
        !selected[num],
        ...selected.slice(num + 1),
      ]);

      setTagArray((tagArray) => [...tagArray, e.target.value]); 
      }

    else if(selectedTag.length  === 3 && selected[num] === false){
      setTagLength(false);
    }

    else if(selectedTag.length  <= 3 && selected[num] === true)
    {
      setTagLength(true);
      setSelected([
        ...selected.slice(0, num),
        !selected[num],
        ...selected.slice(num + 1),
      ]);
      setTagArray(tagArray.filter((tags) => tags !== e.target.value));
    }
    };

      console.log(tagArray);

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
      <Tag value="매콤해요" onClick={selectTag(5)} selected={selected[5]}>
        ♥ 매콤해요
      </Tag>
      <Tag value="부드러워요" onClick={selectTag(6)} selected={selected[6]}>
        ♥ 부드러워요
      </Tag>
      <Tag value="짭짤해요" onClick={selectTag(7)} selected={selected[7]}>
        ♥ 짭짤해요
      </Tag>
      <Tag value="써요" onClick={selectTag(8)} selected={selected[8]}>
        ♥ 써요
      </Tag>
      <Tag value="떫어요" onClick={selectTag(9)} selected={selected[9]}>
        ♥ 떫어요
      </Tag>
      <Tag value="비려요" onClick={selectTag(10)} selected={selected[10]}>
        ♥ 비려요
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

  width: 780px;
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
          background-color: red;
        `
      : `background-color: white;`}
`;
