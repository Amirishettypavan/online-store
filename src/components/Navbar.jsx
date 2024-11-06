import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navbar=()=>{
    const navigate=useNavigate()
    const {data}=useSelector(state=>state.cart)
    return(
        <div className="navbar">
            <h2>Online Store</h2>
            <div className="buttons">
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/cart")}>Cart{` (${data.length})`}</button>
            <button onClick={()=>navigate("/wishlist")}>WishList</button>
            </div>
            
        </div>
    )
}
export default Navbar