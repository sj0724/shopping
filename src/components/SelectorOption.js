import React from "react";
import { useRecoilState } from "recoil";
import { productFilterState } from "../states/productFilterState";

function SelectorOption(){
    const [filter, setfilter] = useRecoilState(productFilterState)

    const updateFilter = ({target: {value}}) => {
        setfilter(value)
    }

    return(
        <div>
            <select value={filter} onChange={updateFilter}>
                <option value="basic">기본</option>
                <option value="score">스코어순</option>
                <option value="price">가격순</option>
            </select>
        </div>
    )
}

export default SelectorOption;