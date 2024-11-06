import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        data:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // state.data.push(action.payload)
            const itemIndex=state.data.findIndex((val)=> val.id===action.payload.id)
            if(itemIndex>=0){
             state.data[itemIndex].quantity+=1
            }
            else{
                const product = { ...action.payload, quantity: 1 };
                state.data.push(product);
            }
        },
        RemoveFromCart:(state,action)=>{
            const filterData=state.data.filter((val)=>{
                return val.id!=action.payload
            })
            state.data=[...filterData]
        },

        Increase:(state,action)=>{
            const itemIndex = state.data.findIndex(
                (item) => item.id === action.payload.id
              );
              if (state.data[itemIndex].quantity >= 1) {
                state.data[itemIndex].quantity += 1;
              }
        },
        Decrease:(state,action)=>{
            const itemIndex = state.data.findIndex(
                (item) => item.id === action.payload.id
              );
              if (state.data[itemIndex].quantity >= 1) {
                state.data[itemIndex].quantity -= 1;
              }
              if(state.data[itemIndex].quantity==0){
                const fData=state.data.filter((val)=>{
                    return val.id!=action.payload.id
                })
                state.data=[...fData]
              }
        }
    }
})




export const {addToCart,RemoveFromCart,Increase,Decrease}=cartSlice.actions
export default cartSlice.reducer