import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const fetchMagazineDetail = async (setMagazineDetaildata) => {
  try {
    setMagazineDetaildata(null);
    const response = await instance.get('api/magazine/daily_curation/14'); //error 뜨는 중
    setMagazineDetaildata(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryIntro = async ({setCategoryIntroData,title}) => {
  try {
    setCategoryIntroData(null);
    const response = await instance.get(`api/category/${title}`);
    setCategoryIntroData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMagazine = async (setMagazineData) => {
  try {
    setMagazineData(null);
    const response = await instance.get(`api/magazine`);
    setMagazineData(response.data);
  } catch (error) {
    console.log(error);
  }
};

//필요한 API만들기
/*export const PersonalInfo = async (token) =>
    await API.get('/mypage', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  export const newReview = async (data) =>
    await axios.post('/item/review', data);
  
  //다른 파일에서 사용예시
  /*const myPage = async () => {
    try {
      const PersonalInfoRes = await PersonalInfo(token);*/
