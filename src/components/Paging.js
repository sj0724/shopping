import React from "react";
import Pagination from "react-js-pagination";

function Paging({page, count, setPage}){

    return(
        <>
            <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={count}
            pageRangeDisplayed={3}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={setPage}/>

        </>
    )
}

export default Paging;