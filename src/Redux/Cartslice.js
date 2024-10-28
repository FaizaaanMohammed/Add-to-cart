import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const cartdata = createAsyncThunk('cartitem',async()=>{
    try{
      const res = await axios.get('https://fakestoreapi.com/products');
    //   console.log(res?.data,'data');
      return res?.data
    }
    catch(err){
        console.log(err);
    }
})

const initialState = ({
    cart:[],
    carttt:[],
    status:'success'
})

export const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
          
    },
    extraReducers:(builder)=>{
     builder.addCase(cartdata.pending,(state)=>{
        state.status = 'pending'
     })
     .addCase(cartdata.fulfilled,(state,action)=>{
        // console.log(action.payload,'payload');
        state.status = 'fullfilled'
        state.cart = action.payload
     })
     .addCase(cartdata.rejected,(state)=>{
        state.status = 'rejected'
     })
    }
})
// console.log('slice',cartslice);
// console.log(initialState,'state');


// export const {Addcart} = cartslice.actions