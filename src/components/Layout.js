import { Link, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { productState } from '../states/productState';

function Layout() {
  const [bag] = useRecoilState(productState);

  return (
    <>
      <div className='flex items-center justify-between h-20 p-4 bg-gray-400'>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <p className='text-4xl font-bold'>SHOP</p>
        </Link>
        <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
          <p className='text-2xl font-bold'>장바구니 : {bag.length}</p>
        </Link>
      </div>
      <div className='relative flex flex-col items-center p-5 overflow-y-scroll'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
