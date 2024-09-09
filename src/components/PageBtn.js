import React from "react";

function PageBtn({item, setPage}){

    return(
        <li onClick={()=>setPage(item)}>{item}</li>
    )
}

export default PageBtn;