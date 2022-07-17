import { atom } from 'recoil';

export const menuOpenState = atom({
  key: 'menuOpenState',
  default: false,
});

export const loginState = atom({
  key: 'loginState',
  default : true,
});

export const surveyState = atom({
  key : 'surveyState',
  default : false,
});

export const TagState = atom({
  key : 'tagState',
  default : [],
});

export const GenderState = atom({
  key : 'genderState',
  default : true,
});

export const PreviewState = atom({
  key : 'previewState',
  default : [],
});