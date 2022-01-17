import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Toggle(state, action){
         console.log(action.favorite.favorite)
      },
      
   }
})

export const {Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;