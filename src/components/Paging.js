import { useState } from 'react';
import PageBtn from './PageBtn';

function Paging({ page, setPage, totalPage }) {
  const [pageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const arr = pageArr.slice(0, totalPage);

  const prev = () => {
    page === 1 ? alert('첫 페이지 입니다!') : setPage(page - 1);
  };

  const next = () => {
    page === totalPage ? alert('마지막 페이지 입니다!') : setPage(page + 1);
  };

  return (
    <>
      <div className='pagination'>
        <ul>
          <li onClick={() => prev()}>{`<`}</li>
          {arr.map((item, index) => (
            <PageBtn item={item} key={index} setPage={setPage} />
          ))}
          <li onClick={() => next()}>{`>`}</li>
        </ul>
      </div>
    </>
  );
}

export default Paging;
