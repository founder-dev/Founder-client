import styled from "styled-components";
import { useRecoilState ,useResetRecoilState } from "recoil";
import { PreviewState } from "../../recoil";
import PhotoIcon from '../../assets/ItemDetailPageAssets/PhotoIcon.png';

function UploadPhoto({photo, setPhoto}){
    
    const [preview, setPreview] = useRecoilState(PreviewState); 

    const uploadPhoto = (e) => {
        setPhoto(e.target.files);
        console.log(photo);
        setPreview(URL.createObjectURL(e.target.files[0])); //대표이미지만
        console.log(preview);
      };
      
    return(
    <>
    <Photo for="uploadPhoto" />
    <img src={preview}></img>
    <input
      id="uploadPhoto"
      type="file"
      accept="image/*"
      multiple="multiple"
      onChange={uploadPhoto}
      style={{ display: 'none' }}
      />
    </>
  )
}

export default UploadPhoto;

const Photo = styled.label`
  margin-right: 23px;
  background-image: url(${PhotoIcon});
  cursor: pointer;
  width: 120px;
  height: 120px;
`;