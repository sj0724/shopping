import React from "react";

function Merchandise ({item, bag, setBag}) {

    const increaseBag = (item) => {
        if(calculator(item) === item.item_name){
            alert('이미 같은 상품이 장바구니에 담겨있습니다!');
        }else if(bag.length < 3){
            item.count = 1;
            const bagList = [...bag,item];
            setBag(bagList);
            localStorage.setItem('bag',JSON.stringify(bagList));
            alert('장바구니에 상품이 담겼습니다!');
        }else{
            alert('장바구니에는 최대 3개의 물건만 남을수 있습니다!');
        }
    };

    const calculator = (e) => {
        for(let i = 0; i < bag.length; i++){
             if(bag[i] === e){
                return e.item_name;
            };
        }
    };

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