import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { PreviewState } from '../../recoil';
import PhotoIcon from '../../assets/ItemDetailPageAssets/UploadPhoto.jpg';

function UploadPhoto({ photo, setPhoto }) {
  const [preview, setPreview] = useRecoilState(PreviewState);

  console.log(preview[0]);
  const uploadPhoto = (e) => {
    setPhoto(e.target.files);
    console.log(photo);
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

  return (
    <>
      {preview[0] == undefined ? (
        <>
          <Photo for="uploadPhoto" />
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
          <PreviewWrapper>
            <Preview src={preview[0]} />
            <Preview src={preview[1]} />
            <Preview src={preview[2]} />
            <Preview src={preview[3]} />
          </PreviewWrapper>
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
  margin-right: 10px;
  object-fit: cover;
`;

const PreviewWrapper = styled.div`
  width: 510px;
  height: 120px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding-left: 20px;
  padding-top: 16px;
  margin-right: 24px;
`;
