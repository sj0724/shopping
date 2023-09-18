import React from "react"
import Merchandise from "../components/Merchandise"
import { useState,useEffect } from "react"

function Product(){
    const [list,setList] = useState('');
    const [bag,setBag] = useState([]);

    let mainContents;

    if(list){
        mainContents = (
            <div className="Board">
            {list.map((item, index)=> (
            <Merchandise 
                item={item}
                key={index} 
                bag={bag}
                setBag={setBag}/>
            ))}
         </div>
        )
    }else{
        mainContents = (
            <div>
                <h2>404 Not Found</h2>
            </div>
        )
    }

    useEffect(()=>{
        fetch('http://localhost:3000/data/productItem.json', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            setList(data);
        })
        const localbag = localStorage.getItem('bag');
        if(localbag)setBag(JSON.parse(localbag));
    },[]);

    return(
        <>
        {mainContents}
        </>
    );
}

export default Product;