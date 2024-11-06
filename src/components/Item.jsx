import React from 'react'
import { useLocation } from 'react-router-dom'
import { addToWishlist } from '../redux/wishListSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const Item = () => {
    const {state}=useLocation()
    // console.log(state)
    const dispatch=useDispatch()
  return (
    <div className='p-5'>
       <div className=''>
       {
        state.map((data)=>{
            return(
                // eslint-disable-next-line react/jsx-key
                <div className="card mt-5 d-flex flex-row" style={{width: ""}} >
                <img src={data.image} className="card-img-top mt-2" alt="..." height={280}/>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <button className="btn btn-primary me-1" onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>
                  <button className="btn btn-primary" onClick={()=>dispatch(addToWishlist(data))}>Add to WishList</button>
                </div>
                </div>
            )
        })
       }
       </div>
    </div>
  )
}

export default Item