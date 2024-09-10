import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import mockData from '../mockData.json';

const { persistAtom } = recoilPersist();

export const productState = atom({
  key: 'productState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const productList = atom({
  key: 'productList',
  default: [...mockData],
});
