import { configureStore } from "@reduxjs/toolkit"; 
import favoriteSlice from "./favoriteSlice";

export default configureStore({
   reducer: {
      favorite: favoriteSlice,
      user: 
   }
})