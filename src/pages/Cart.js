import { useState } from 'react';
import BagList from '../components/BagList';
import { productState } from '../states/productState';
import { useRecoilState } from 'recoil';
import NotList from '../components/NotList';

const Cart = () => {
  const [bag] = useRecoilState(productState);
  const [price, setPrice] = useState(0);

  return (
    <>
      {bag[0] ? (
        <ul className='flex flex-col justify-center items-center w-[650px] gap-4'>
          {bag.map((item) => (
            <li key={item.item_no} className='w-full'>
              <BagList item={item} setPrice={setPrice} price={price} />
            </li>
          ))}
        </ul>
      ) : (
        <NotList />
      )}
      <div className='h-24 p-8 bg-gray-300 fixed bottom-0 right-0 left-0'>
        <h1>총 합계: {price} </h1>
      </div>
    </>
  );
};

export default Cart;
