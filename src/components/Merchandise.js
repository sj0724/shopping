import { useCallback } from 'react';
import { productState } from '../states/productState';
import { useRecoilState } from 'recoil';

function Merchandise({ item }) {
  const [bag, setBag] = useRecoilState(productState);

  const calculator = useCallback(
    (e) => {
      for (let i = 0; i < bag.length; i++) {
        if (bag[i].item_no === e.item_no) {
          return e.item_no;
        }
      }
    },
    [bag]
  );

  const increaseBag = (item) => {
    const addItem = { ...item };
    const result = calculator(addItem);
    if (result === addItem.item_no) {
      alert('이미 같은 상품이 장바구니에 담겨있습니다!');
    }
    if (bag.length < 3) {
      addItem.count = 1;
      const bagList = [...bag, addItem];
      setBag(bagList);
      alert('장바구니에 상품이 담겼습니다!');
    } else {
      alert('장바구니에는 최대 3개의 물건만 남을수 있습니다!');
    }
  };

  return (
    <div className='flex p-4 rounded-lg gap-6 shadow-lg hover:bg-slate-100'>
      <img
        className='w-52 h-52 rounded-md aspect-square'
        src={item.detail_image_url}
        alt='상품 이미지'
      />
      <div className='flex flex-col w-full justify-between py-4'>
        <p className='text-2xl font-semibold'>{item.item_name}</p>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-semibold'>가격 : {item.price}원</p>
          <button
            onClick={() => increaseBag(item)}
            className='bg-white w-32 rounded-md border h-10 hover:bg-gray-200'
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
