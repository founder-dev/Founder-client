import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const itemHoverState = atom({
  key: 'itemHoverState',
  default: false,
});

export const menuOpenState = atom({
  key: 'menuOpenState',
  default: false,
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const surveyState = atom({
  key: 'surveyState',
  default: false,
});

export const TagState = atom({
  key: 'tagState',
  default: [],
});

export const GenderState = atom({
  key: 'genderState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const PreviewState = atom({
  key: 'previewState',
  default: [],
});
