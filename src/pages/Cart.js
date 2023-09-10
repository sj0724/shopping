import React from "react";
import { useState, useEffect } from "react";
import BagList from "../components/BagList";

const Cart = () => {
  const [shop, setShop] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const shopList = localStorage.getItem("bag");
    //price 는 로컬스토리지로 저장하지 않아도 될듯
    const bagPrice = localStorage.getItem("price");
    if (shopList) setShop(JSON.parse(shopList));
    if (bagPrice) setPrice(JSON.parse(bagPrice));
  }, []);

  //up, down 함수도 없애기
  function up(e) {
    const upPrice = price + e.price;
    setPrice(upPrice);
  }

  function down(e) {
    const downPrice = price - e.price;
    setPrice(downPrice);
  }

  function delate(e) {
    const delateList = shop.filter((item) => item.item_no !== e.item_no);
    const delatePrice = price - e.price;
    setShop(delateList);
    setPrice(delatePrice);
    localStorage.setItem("bag", JSON.stringify(delateList));
    localStorage.setItem("price", JSON.stringify(delatePrice));
  }

  return (
    <>
      <div className="alertBag">
        <h1>장바구니가 비어있습니다!</h1>
      </div>
      <div className="cart">
        {shop.map((item, index) => (
          <BagList
            item={item}
            key={index}
            up={up}
            down={down}
            delate={delate}
          />
        ))}
      </div>
      <div className="total_modal">
        <h1>총 합계: {price}</h1>
      </div>
    </>
  );
};

export default Cart;
