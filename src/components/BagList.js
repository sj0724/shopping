import React, { useState } from 'react';
import Checkbox from './CheckBox';
import { useRecoilState } from 'recoil';
import { productState } from '../states/productState';

function BagList({ item, price, setPrice }) {
  const [bag, setBag] = useRecoilState(productState);
  const [piece, setPiece] = useState(item.count);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const calculate = (e) => {
    if (checked) {
      setChecked(false);
      const total = price - e.price * piece;
      setPrice(total);
      setDisabled(false);
    } else {
      setChecked(true);
      const total = price + e.price * piece;
      setPrice(total);
      setDisabled(true);
    }
  };

  const up = () => {
    const increasePiece = piece + 1;
    setPiece(increasePiece);
  };

  const down = () => {
    if (piece === 1) {
      alert('최소 수량은 1개입니다.');
      return;
    }
    const decreasePiece = piece - 1;
    setPiece(decreasePiece);
  };

  function delate(e) {
    const delateList = bag.filter((item) => item.item_no !== e.item_no);
    setBag(delateList);
    const delatePrice = price - item.price * piece;
    setPrice(delatePrice);
  }

  return (
    <div className='bagItem'>
      <Checkbox item={item} calculate={calculate} checked={checked} />
      <img
        className='image'
        src={item.detail_image_url}
        alt='장바구니 이미지'
      ></img>
      <div className='info'>
        <h3>{item.item_name}</h3>
        <h3>{item.price}원</h3>
        <div className='bagBtn'>
          수량 : {piece}
          <button onClick={up} disabled={disabled}>
            +
          </button>
          <button onClick={down} disabled={disabled}>
            -
          </button>
          <div className='delBtn'>
            <button onClick={() => delate(item)}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagList;
