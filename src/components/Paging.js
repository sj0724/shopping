import { useState } from 'react';
import PageBtn from './PageBtn';

function Paging({ page, setPage, totalPage }) {
  const [pageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const arr = pageArr.slice(0, totalPage);

  const isPrevPage = () => {
    page === 1 ? alert('첫 페이지 입니다!') : setPage(page - 1);
  };

  const isNextPage = () => {
    page === totalPage ? alert('마지막 페이지 입니다!') : setPage(page + 1);
  };

  return (
    <ul className='flex justify-center gap-2'>
      <li
        onClick={isPrevPage}
        className='flex justify-center items-center w-10 h-10 border rounded-md hover:bg-gray-200 cursor-pointer'
      >{`<`}</li>
      {arr.map((item, index) => (
        <PageBtn item={item} key={index} setPage={setPage} currentPage={page} />
      ))}
      <li
        onClick={isNextPage}
        className='flex justify-center items-center w-10 h-10 border rounded-md hover:bg-gray-200 cursor-pointer'
      >{`>`}</li>
    </ul>
  );
}

export default Paging;
