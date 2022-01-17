import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Toggle(state, action){
         console.log(state.favorite.favorite)
         console.log(action.payload)
      },
      
   }
})

export const {Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;