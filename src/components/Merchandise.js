import React from "react";

function Merchandise ({item, increaseBag}) {
    return(
        <div className="singleItem">
            <img className="image" src={item.detail_image_url}></img>
            <div className="info">
             <h3>{item.item_name}</h3>
             <h3>{item.price}원</h3><button onClick={()=>increaseBag(item)}>장바구니</button>
            </div>
        </div>
    )
}

export default Merchandise;