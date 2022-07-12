import styled, { css } from 'styled-components';
import { useState } from 'react';
import { fontWeight, color, fontsize } from '../../lib/theme';

function TagSelect({ setTagLength }) {
  var tag = [];
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

  const handleTagLength = () => {
    if (tag.length >= 2) {
      setTagLength(false);
    }
  };

  const selectTag = (num) => (e) => {
    e.preventDefault();
    handleTagLength();
    selected[num] = !selected[num];
    console.log(selected[num]);
    console.log(e.target.value);
    console.log(e.target.style.backgroundcolor);
    tag = [...tag, e.target.value];
    console.log(tag);
    console.log(tag.length);
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

export default TagSelect;

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
