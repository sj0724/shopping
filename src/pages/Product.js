import React, { useEffect, useState } from "react"
import Merchandise from "../components/Merchandise"
import Paging from "../components/Paging"
import { productList } from "../states/productState"
import { useRecoilValue } from "recoil"

function Product(){
    const list = useRecoilValue(productList)

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const [indexOfLastPost, setindexOfLastPost] = useState(0);
    const [indexOfFirstPost, setindexOfFirstPost] = useState(0);
    const [currentPost, setCurrentPost] = useState(0);

    useEffect(() => {
        setProducts(list)
        setCount(products.length)
        setindexOfLastPost(currentPage * postPerPage)
        setindexOfFirstPost(indexOfLastPost - postPerPage)
        setCurrentPost(products.slice(indexOfFirstPost, indexOfLastPost))
    },[currentPage,indexOfFirstPost,indexOfLastPost,products,postPerPage]);

    const setPage = (e) => {
        setCurrentPage(e)
    }

    return(
        <div>
        {currentPost && (
            <div className="Board">
            {currentPost.map((item)=> (
                <Merchandise
                item={item}
                key={item.item_no}
                />
            ))}
            <Paging page={currentPage} count={count} setPage={setPage}/>
            </div>
        )}
        </div>
    );
}

export default Product;