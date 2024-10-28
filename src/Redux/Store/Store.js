import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "../Cartslice";
import { Addcartslice } from "../Addcartslice";


export const store = configureStore({
    reducer:{
        cart : cartslice.reducer,
        addcart:Addcartslice.reducer
    }
})

