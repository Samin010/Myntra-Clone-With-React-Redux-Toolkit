import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./fetchStatusSLice"
import bagSlice from "./bagSlice"


const myntraStore=configureStore({
  reducer:{
    item:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer
  }
})
export default myntraStore
