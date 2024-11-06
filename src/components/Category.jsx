import React, { useEffect, useState } from 'react'
import { addToWishlist, RemoveFromWishList } from '../redux/wishListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  const dispatch=useDispatch()
  const [newdata,setdata]=useState([])
  const {state}=useLocation()
  const store=useSelector(state=>state.wishList)
  function fetchData(){
    fetch(`https://fakestoreapi.com/products/category/${state}`)
    .then(res=>res.json())
    .then(data=>setdata(data))
}

useEffect(()=>{
    fetchData()
},[state])
function check(val){
  return store.data.some( (data)=>val==data.id)
}
const notify = () => toast.success("Added To Cart");
  return (
    <div >
     <div className='d-flex flex-wrap  justify-content-center '>
         {
         newdata.map((val)=>{
          return(
            // eslint-disable-next-line react/jsx-key
            <div className="card categoryCard mt-5 ms-4" style={{width: "18rem"}}>
              <div className='d-flex justify-content-end'>{
                (check(val.id)? <h1 onClick={()=>dispatch(RemoveFromWishList(val.id))}><i className="fa-solid fa-heart me-3" style={{color: "#eb0000"}}></i></h1>:
                <h1 onClick={()=>{dispatch(addToWishlist(val))}}> <i className="fa-regular fa-heart me-3"></i></h1>
              )

                }
              
              </div>
            <img src={val.image} className="card-img-top" alt="..." height={280}  />
            
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.price}</p>
              <button className="btn btn-primary HomeButton" onClick={()=>{notify(),dispatch(addToCart(val))}}>Add to Cart</button>
            </div>
            </div>
          )
      })
       }
     </div>
     <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Category