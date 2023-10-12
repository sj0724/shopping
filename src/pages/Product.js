import React from "react"
import Merchandise from "../components/Merchandise"
import Paging from "../components/Paging"
import { productList } from "../states/productState"
import { useRecoilValue } from "recoil"

function Product(){
    const list = useRecoilValue(productList)

    return(
        <div>
        {list && (
            <div className="Board">
            {list.map((item)=> (
                <Merchandise
                item={item}
                key={item.item_no}
                />
            ))}
            <Paging list={list}/>
            </div>
        )}
        </div>
    );
}

export default Product;