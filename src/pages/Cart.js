import React from "react";
import { useState,useEffect } from "react";
import BagList from "../components/BagList";

const Cart = () => {
    const [shop,setShop] = useState([]);
    const [price,setPrice] = useState(0);

    useEffect(()=>{
        const shopList = localStorage.getItem('bag');
        if(shopList)setShop(JSON.parse(shopList));
    },[]);

    function delate(e){
        const delateList = shop.filter((item)=>item.item_no !== e.item_no);
        setShop(delateList);
        localStorage.setItem('bag',JSON.stringify(delateList));
        if(delateList.length === 0){
            setPrice(0)
        };
    };

    return(
        <>
        {shop && (
            <div className="cart">
            {shop.map((item)=>(
                <BagList 
                item={item} 
                key={item.item_no} 
                delate={delate} 
                shop={shop} 
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