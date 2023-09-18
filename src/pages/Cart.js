import React from "react";
import { useState,useEffect } from "react";
import BagList from "../components/BagList";

const Cart = () => {
    const [shop,setShop] = useState([]);
    const [price,setPrice] = useState(0);

    let bagContents;

    if(shop.length > 0){
        bagContents = (
            <div>
            <div className="cart">
            {shop.map((item,index)=>
            (<BagList 
               item={item} 
               key={index} 
               delate={delate} 
               shop={shop} 
               setPrice={setPrice} 
               price={price}/>
               ))}
       </div>
       <div className="total_modal">
           <h1>총 합계: {price} </h1>
       </div>
       </div>
        )
    }else {
        bagContents = (
            <div>
                <h2>장바구니가 비었습니다!</h2>
               <div className="total_modal">
               <h1>총 합계: {price} </h1>
               </div>
            </div>
        )
    }

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
        {bagContents}
        </>
    );
};

export default Cart;