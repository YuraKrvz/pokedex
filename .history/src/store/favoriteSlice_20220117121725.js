import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Toggle(state, action){
         // console.log( state.favorite.includes(action.payload) );
         if(state.favorite.includes(action.payload)){
            state.favorite = state.favorite.filter(item => item !== action.payload)
         } else {
            state.favorite = state.favorite.push(action.payload)
         }
      },
      
   }
})

export const {Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;