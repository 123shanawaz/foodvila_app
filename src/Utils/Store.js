import { configureStore } from "@reduxjs/toolkit";
import Cardslice from "./CardSlice"

const Store=configureStore({
    reducer:{
        card:Cardslice,
    }



})

export default Store;