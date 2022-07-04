import { atom } from 'recoil';

export const menuOpenState = atom({
  key: 'menuOpenState',
  default: false,
});

export const loginState = atom({
  key: 'loginState',
  default : false,
});

export const surveyState = atom({
  key : 'surveyState',
  default : false,
});