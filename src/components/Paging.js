import React, { useState } from "react";
import Pagination from "react-js-pagination";

function Paging({list}){

    const [page,setPage] = useState(1);
    const handlePaging = (page) => {
        setPage(page)
    }

    return(
        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={list.length}
            pageRangeDisplayed={3}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePaging}/>
    )
}

export default Paging;