import { atom } from "recoil";
import productItems from "../components/productItems";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const productState = atom({
    key: 'productState',
    default: [],
    effects_UNSTABLE:[persistAtom]
});

export const productList = atom({
    key: 'productList',
    default: [...productItems]
})