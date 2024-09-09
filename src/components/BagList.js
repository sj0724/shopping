import { useState } from 'react';
import Checkbox from './CheckBox';
import { useRecoilState } from 'recoil';
import { productState } from '../states/productState';

function BagList({ item, price, setPrice }) {
  const [bag, setBag] = useRecoilState(productState);
  const [piece, setPiece] = useState(item.count);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const calculatePrice = (e) => {
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

  const upCount = () => {
    const increasePiece = piece + 1;
    setPiece(increasePiece);
  };

  const downCount = () => {
    if (piece === 1) {
      alert('최소 수량은 1개입니다.');
      return;
    }
    const decreasePiece = piece - 1;
    setPiece(decreasePiece);
  };

  const delateItem = (e) => {
    const delateList = bag.filter((item) => item.item_no !== e.item_no);
    setBag(delateList);
    if (checked) {
      const delatePrice = price - item.price * piece;
      setPrice(delatePrice);
    }
  };

  return (
    <div className='flex p-4 rounded-lg gap-6 shadow-lg hover:bg-slate-100 items-center'>
      <Checkbox item={item} calculate={calculatePrice} checked={checked} />
      <img
        className='w-52 h-52 rounded-md aspect-square'
        src={item.detail_image_url}
        alt='장바구니 이미지'
      />
      <div className='flex flex-col h-full w-full justify-between py-4'>
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold'>{item.item_name}</p>
          <h3>{item.price}원</h3>
        </div>
        <div className='flex h-[50px] items-center justify-between'>
          {`수량 : ${piece}`}
          <div className='flex'>
            <button
              onClick={upCount}
              disabled={disabled}
              className='h-8 w-8 border rounded-md text-xl'
            >
              +
            </button>
            <button
              onClick={downCount}
              disabled={disabled}
              className='h-8 w-8 border rounded-md text-xl'
            >
              -
            </button>
          </div>
          <button
            onClick={() => delateItem(item)}
            className='bg-white w-32 rounded-md border h-10 hover:bg-gray-200'
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default BagList;
