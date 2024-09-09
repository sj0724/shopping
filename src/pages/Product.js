import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Merchandise from '../components/Merchandise';
import Paging from '../components/Paging';
import SelectorOption from '../components/SelectorOption';
import { filterProduct } from '../states/productFilterState';

function Product() {
  const list = useRecoilValue(filterProduct);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [indexOfLastPost, setindexOfLastPost] = useState(0);
  const [indexOfFirstPost, setindexOfFirstPost] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);
  const totalPage = Math.ceil(count / postPerPage);

  useEffect(() => {
    setProducts(list);
    setCount(products.length);
    setindexOfLastPost(currentPage * postPerPage);
    setindexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPost(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [
    currentPage,
    indexOfFirstPost,
    indexOfLastPost,
    products,
    postPerPage,
    list,
  ]);

  const setPage = (e) => {
    setCurrentPage(e);
  };

  return (
    <div>
      <SelectorOption />
      {currentPost && (
        <div className='Board'>
          {currentPost.map((item) => (
            <Merchandise item={item} key={item.item_no} />
          ))}
          <Paging page={currentPage} totalPage={totalPage} setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default Product;
