import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ ],
   },
   reducers: {
      Toggle(state, action){
         
         if(state.favorite.includes(action.payload)){
            state.favorite = state.favorite.filter(item => item !== action.payload)
         } else {
            state.favorite.push(action.payload)
         }
      },
   }
})

export const {Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;