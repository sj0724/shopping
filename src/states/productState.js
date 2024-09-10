import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const productState = atom({
  key: 'productState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
