import { createSlice } from "@reduxjs/toolkit";


export const wishListSlice=createSlice({
    name:'wishList',
    initialState:{
        data:[]
    },
    reducers:{
        
        addToWishlist:(state,action)=>{
            state.data.push(action.payload)
        },
        RemoveFromWishList:(state,action)=>{
            const filterData=state.data.filter((val)=>{
                return val.id!=action.payload
            })
            state.data=[...filterData]
        }
    }
})




export const {addToWishlist,RemoveFromWishList}=wishListSlice.actions
export default wishListSlice.reducer