import { atom } from "recoil";
import productItems from "../components/productItems";

export const productState = atom({
    key: 'productState',
    default: []
});

export const productList = atom({
    key: 'productList',
    default: productItems
})