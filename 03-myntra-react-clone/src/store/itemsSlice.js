import { createSlice } from "@reduxjs/toolkit"

const itemsSlice=createSlice({
  name:"items",
  initialState:[],
  reducers:{
    addInitialItems:(store,action)=>{
      // console.log("items",action.payload)
      return action.payload
    }
  }
})

export const itemsActions=itemsSlice.actions

export default itemsSlice
