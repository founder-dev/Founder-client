import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { PreviewState } from '../../recoil';
import PhotoIcon from '../../assets/ItemDetailPageAssets/UploadPhoto.jpg';

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

  const reUploadPhoto = (num) => (e) => {
    console.log(e.target.files[0]);

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
            <>
              {[0, 1, 2, 3].map((num) => (
                <>
                  <PreviewLabel for={num}>
                    <Preview photo={preview[num]} />
                  </PreviewLabel>
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
            </>
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
  background-image: url(${(props) => props.photo});
  margin-right: 10px;
  object-fit: cover;
`;

const PreviewLabel = styled.label`
  width: 100px;
  height: 100px;
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
