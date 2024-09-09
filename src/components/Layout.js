import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className='flex p-4 bg-gray-400 justify-between h-20 items-center'>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <p className='text-4xl font-bold'>SHOP</p>
        </Link>
        <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
          <p className='text-2xl font-bold'>장바구니</p>
        </Link>
      </div>
      <div className='relative flex flex-col items-center p-5 overflow-y-scroll'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
