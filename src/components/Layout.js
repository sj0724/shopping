import React from "react";
import { Link,Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
         <div className="header">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}><h1>SHOP</h1></Link>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}><h1>장바구니</h1></Link>
         </div>
         <div>
          <Outlet />
         </div>
        </>
    )
}

export default Layout;