import React from "react";
import { useRef } from "react";

function BagList({item, up, down, delate}){
    const count = useRef(1);

    const upCount = ()=>{
        count.current +=1
        up(item)    
    }

    const downCount = ()=>{
        if(count.current === 1){
            return;
        }else{
            count.current -=1
            down(item) 
        }
    }
    return(
        <div className="bagItem">
            <input type="checkbox" ></input>
            <img className="image" src={item.detail_image_url}></img>
            <div className="info">
             <h3>{item.item_name}</h3>
             <h3>{item.price}원</h3>
             <div className="bagBtn">
              수량 :{count.current}<button onClick={upCount}>+</button><button onClick={downCount}>-</button>
              <div className="delBtn"><button onClick={()=>delate(item)}>삭제</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default BagList