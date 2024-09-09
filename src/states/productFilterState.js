import { atom, selector } from 'recoil';
import { productList } from './productState';

export const productFilterState = atom({
  key: 'productFilterState',
  default: 'basic',
});

export const filterProduct = selector({
  key: 'filterProduct',
  get: ({ get }) => {
    const filter = get(productFilterState);
    const list = get(productList);

    switch (filter) {
      case 'score':
        const scoreList = [...list];
        return scoreList.sort((a, b) => a.score - b.score);
      case 'price':
        const priceFilter = [...list];
        return priceFilter.sort((a, b) => a.price - b.price);
      default:
        return list;
    }
  },
});
