import React from "react";
import { useState } from "react";
import BagList from "../components/BagList";
import { productState } from "../states/productState";
import { useRecoilState } from "recoil";

const Cart = () => {
    const [bag,setBag] = useRecoilState(productState);
    const [price,setPrice] = useState(0);

    function delate(e){
        const delateList = bag.filter((item)=>item.item_no !== e.item_no);
        setBag(delateList);
        if(delateList.length === 0){
            setPrice(0)
        };
    };

    return(
        <>
        {bag && (
            <div className="cart">
            {bag.map((item)=>(
                <BagList 
                item={item} 
                key={item.item_no} 
                delate={delate} 
                bag={bag} 
                setPrice={setPrice} 
                price={price}/>
            ))}
            </div>
        )}
        <div className="total_modal">
           <h1>총 합계: {price} </h1>
       </div>
        </>
    );
};

export default Cart;