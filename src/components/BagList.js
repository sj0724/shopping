import React, { useState } from "react";

function BagList({item, delate}){

    const[piece,setPiece] = useState(item.count)

    const up = () => {
        const increasePiece = piece + 1
        setPiece(increasePiece)
    };

    const down = () => {
        if(piece == 1){
            return
        }
        const decreasePiece = piece - 1
        setPiece(decreasePiece)
    };

    return(
        <div className="bagItem">
            <input type="checkbox" ></input>
            <img className="image" src={item.detail_image_url}></img>
            <div className="info">
             <h3>{item.item_name}</h3>
             <h3>{item.price}원</h3>
             <div className="bagBtn">
              수량 :{piece}<button onClick={up}>+</button><button onClick={down}>-</button>
              <div className="delBtn"><button onClick={()=>delate(item)}>삭제</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default BagList