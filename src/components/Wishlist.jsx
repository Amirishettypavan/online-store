import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { RemoveFromWishList } from '../redux/wishListSlice'
// import { useLocation } from 'react-router-dom'

const Wishlist = () => {
    const {data}=useSelector(state=>state.wishList)
    const dispatch=useDispatch()
  return (
    <div className='cardDesign '>
      <div className='mt-5 d-flex flex-wrap justify-content-center'>
        {
         data.map((data)=>{
             return(
                // eslint-disable-next-line react/jsx-key
                <div className="card mt-5" style={{width: "22rem"}} >
                <img src={data.image} className="card-img-top mt-2" alt="..." height={280}/>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <button className="btn btn-primary me-1" onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>
                  <button className="btn btn-primary" onClick={()=>dispatch(RemoveFromWishList(data.id))}>Remove From WishList</button>
                </div>
                </div>
            )
            
        })
        
    }
      </div>
    </div>
  )
}

export default Wishlist