import React from "react";

//더미 데이터(mock data)에 대해서 공부해보기, json 파일로 관리
//폴더 구조도 같이 생각해보면 좋을 듯
import productItems from "../components/productItems";
import Merchandise from "../components/Merchandise";
import { useState, useEffect } from "react";
import addBtn from "../components/addBtn";

const Product = () => {
  const [list, setList] = useState(productItems);

  //bag의 초기값을 productItems로 설정, 새로운 필드 추가 ex)count 로 해결해보기
  const [bag, setBag] = useState([]);

  //bag 수정하면 price 변수 필요 없을 듯
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const localbag = localStorage.getItem("bag");
    if (localbag) setBag(JSON.parse(localbag));
  }, []);

  //이 함수도 bag 수정 후 Merchandise 으로 옮겨도 될듯(확실x)
  //해당 컴포넌트에서만 사용하는 함수는 그 안에 있는게 가독성 측면에서 더 좋음
  const increaseBag = (item) => {
    if (test(item) === item.item_name) {
      //alert return 값에 대해 검색해보기
      alert("이미 같은 상품이 장바구니에 담겨있습니다!");
      return false;
    } else if (bag.length < 3) {
      //let 과 count 의 차이점에 대해 알고 있는지
      //let 을 사용한 이유에 대해 생각해보기
      let bagList = [...bag, item];
      setBag(bagList);
      localStorage.setItem("bag", JSON.stringify(bagList));
      let totalPrice = price + item.price;
      setPrice(totalPrice);
      localStorage.setItem("price", JSON.stringify(totalPrice));
      alert("장바구니에 상품이 담겼습니다!");
      return;
    } else {
      alert("장바구니에는 최대 3개의 물건만 남을수 있습니다!");
    }
    return;
  };

  //함수명 수정 필요
  //그리고 위에 bag 수정하면 이 함수도 수정 필요할듯
  const test = (e) => {
    for (let i = 0; i < bag.length; i++) {
      if (bag[i] === e) {
        return e.item_name;
      }
    }
    return null;
  };

  /**
   * list 가 빈값일 때 고려해서 수정해보기
   * 아래 코드로는 렌더링 이슈 발생할 수 있음
   * 추가로 공부해보면 좋은것들
   * csr, ssr
   * 조건부 렌더링
   * **/

  return (
    <>
      <div className="Board">
        {list.map((item, index) => (
          <Merchandise
            item={item}
            key={index}
            increaseBag={increaseBag}
            bag={bag}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
