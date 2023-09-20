import React from "react"
import Merchandise from "../components/Merchandise"
import { useState,useEffect } from "react"

function Product(){
    const [list,setList] = useState('');
    const [bag,setBag] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/data/productItem.json',{
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            setList(data)
        })
        const localbag = localStorage.getItem('bag');
        if(localbag)setBag(JSON.parse(localbag));
    },[]);

    return(
        <>
        {list && (
            <div className="Board">
            {list.map((item, index)=> (
                <Merchandise
                item={item}
                key={index}
                bag={bag}
                setBag={setBag}/>
            ))}
            </div>
        )}
        </>
    );
}

export default Product;