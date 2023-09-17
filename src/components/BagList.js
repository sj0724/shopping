import React, { useState } from "react";
import Checkbox from "./CheckBox";

function BagList({item, delate, price, setPrice}){

    const[piece,setPiece] = useState(item.count);
    const[checked, setChecked] = useState(false);
    const[disabled,setDisabled] = useState(false)

    const calculate = (e) => {
        if(checked === false){
            setChecked(true);
            const total = price + e.price*piece;
            setPrice(total);
            setDisabled(true);
        }else if(checked === true){
            setChecked(false);
            const total = price - e.price*piece;
            setPrice(total);
            setDisabled(false);
        };
    };

    const up = () => {
        const increasePiece = piece + 1;
        setPiece(increasePiece);
    };

    const down = () => {
        if(piece === 1){
            return;
        };
        const decreasePiece = piece - 1;
        setPiece(decreasePiece);
    };

    return(
        <div className="bagItem">
            <Checkbox item={item} calculate={calculate} checked={checked}/>
            <img className="image" src={item.detail_image_url}></img>
            <div className="info">
             <h3>{item.item_name}</h3>
             <h3>{item.price}원</h3>
             <div className="bagBtn">
              수량 :{piece}<button onClick={up} disabled={disabled}>+</button>
              <button onClick={down} disabled={disabled}>-</button>
              <div className="delBtn"><button onClick={()=>delate(item)}>삭제</button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default BagList;