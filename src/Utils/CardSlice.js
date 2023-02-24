import { createSlice } from "@reduxjs/toolkit";

const CardSlice= createSlice({
    name:"card",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        clearCard:(state)=>{
            state.items=[];

        },
    },
})

export const {addItems,removeItems,clearCard}=  CardSlice.actions;

export default CardSlice.reducer;