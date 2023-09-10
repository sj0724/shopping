import React from "react"
import productItems from "../components/productItems"
import Merchandise from "../components/Merchandise"
import { useState,useEffect } from "react"
import addBtn from "../components/addBtn"

const Product = () =>{
    const [list,setList] = useState(productItems)
    const [bag,setBag] = useState([])
    const [price,setPrice] = useState(0)

    useEffect(()=>{
        const localbag = localStorage.getItem('bag')
        if(localbag)setBag(JSON.parse(localbag))
    },[])

    const increaseBag = (item) => {
        if(test(item) === item.item_name){
            alert('이미 같은 상품이 장바구니에 담겨있습니다!')
            return false;
        }else if(bag.length < 3){
            let bagList = [...bag,item]
            setBag(bagList)
            localStorage.setItem('bag',JSON.stringify(bagList))
            let totalPrice = price + item.price
            setPrice(totalPrice)
            localStorage.setItem('price',JSON.stringify(totalPrice))
            alert('장바구니에 상품이 담겼습니다!')
            return;
        }else{
            alert('장바구니에는 최대 3개의 물건만 남을수 있습니다!')
        }
    return;
    }

    const test = (e) => {
        for(let i = 0; i < bag.length; i++){
             if(bag[i] === e){
                return e.item_name;
            }
        }
        return null;
    }

    return(
        <>
         <div className="Board">
            {list.map((item, index)=> (
            <Merchandise item={item} key={index} increaseBag={increaseBag} bag={bag}/>
            ))}
         </div>
        </>
    )
}

export default Product