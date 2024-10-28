import {  createSlice } from "@reduxjs/toolkit"

const initialState = ({
   addcart:[],
   status:"succsess",
   quantity:0
})

export const Addcartslice = createSlice({
    name:"addcart",
    initialState,
    reducers:{
        addcartt:(state,action)=>{
            const find = state.addcart.findIndex((item)=>{
              return item.id === action.payload.id
            })
            console.log('find',find);
            if(find>=0){
                state.addcart[find].quantity += 1
            }
            else{
                let tempvar = {...action.payload, quantity:1}
                state.addcart.push(tempvar)   
            }
        }
    },
   
    
})

export const {addcartt} = Addcartslice.actions
// console.log('addcart',add);



