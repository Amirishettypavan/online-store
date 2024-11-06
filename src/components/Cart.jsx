import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, Increase, RemoveFromCart } from '../redux/cartSlice'

const Cart = () => {
  const {data}=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  function check(){
    return data.some((data)=>data)
  }
  
  const total=data.reduce((acc,val)=>{
    return acc+val.price*val.quantity
  },0)
  return (
    <div >
      { 
        (check()?
        <div className='CartCard pt-5 '>{ 
          <div className='mt-5 '><h1 className='d-flex justify-content-end mb-5 mt-5'> Total: {total.toFixed(2)}</h1>
            {
            data.map((data)=>{
              return(
                  // eslint-disable-next-line react/jsx-key
                 <div className='Cart mt-2' >
                  {
                     <div> <div className="card d-flex flex-row " style={{width: "auto"}} >
                    <img src={data.image} className="d-flex align-items-center justify-content-center ms-5 me-5" alt="..." height={100} width={100}/>
                    <div className="card-body d-flex align-items-center ">
                      <h5 className="card-title me-5">{data.title}</h5>
                      {/* <p className="card-text">{data.description}</p> */}
                      <div className=''>
                        <span onClick={()=>dispatch(Decrease(data))}>-</span>
                        <span className='m-3 me-3'>{data.quantity}</span>
                        <span onClick={()=>dispatch(Increase(data))}>+</span>
                        <span className='ms-3' >{(data.price*data.quantity).toFixed(2)} </span>
                      <button  className="btn btn-outline-dark ms-5" onClick={()=>dispatch(RemoveFromCart(data.id))}><i className="fa-solid fa-trash"></i></button>
                      </div>
                      
                    </div>
                    </div> </div>
                  }
          </div>
              )  
           })}
            </div>
          }
        </div> :<div className='p-5 '>
            <h1 className='d-flex justify-content-center align-center mt-5 ms-5'>No Item Selected</h1>
          <img src="../cart.png" alt="" className='cartImage' /></div>
       )
      }
    </div>
  )
}

export default Cart