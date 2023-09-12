import React from "react"
import productItems from "../components/productItems"
import Merchandise from "../components/Merchandise"
import { useState,useEffect } from "react"

function Product(){
    const [list,setList] = useState(productItems);
    const [bag,setBag] = useState([]);

    useEffect(()=>{
        const localbag = localStorage.getItem('bag');
        if(localbag)setBag(JSON.parse(localbag));
    },[]);

    return(
        <>
         <div className="Board">
            {list.map((item, index)=> (
            <Merchandise 
                item={item}
                key={index} 
                bag={bag}
                setBag={setBag}/>
            ))}
         </div>
        </>
    );
}

export default Product;