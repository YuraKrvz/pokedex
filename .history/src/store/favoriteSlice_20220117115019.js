import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Toggle(state, action){
         console.log( state.favorite.includes(action.payload) );
         // console.log(action.payload);
         if(state.favorite.includes(action.payload)){
            state.favorite.
         }
      },
      
   }
})

export const {Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;