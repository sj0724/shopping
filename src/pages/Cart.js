import React from "react";
import { useState,useEffect} from "react";
import BagList from "../components/BagList";

const Cart = () => {
    const [shop,setShop] = useState([]);

    useEffect(()=>{
        const shopList = localStorage.getItem('bag');
        if(shopList)setShop(JSON.parse(shopList))
    },[]);

    function delate(e){
        const delateList = shop.filter((item)=>item.item_no !== e.item_no)
        setShop(delateList)
        localStorage.setItem('bag',JSON.stringify(delateList))
    };

    
    return(
        <>
         <div className="cart">
             {shop.map((item,index)=>
             (<BagList item={item} key={index} delate={delate}/>))}
        </div>
        <div className="total_modal">
            <h1>총 합계: </h1>
        </div>
        </>
    );
};

export default Cart;