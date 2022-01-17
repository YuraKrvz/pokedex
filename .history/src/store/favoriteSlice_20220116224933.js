import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Toggle(state, action){
         
      },
      
   }
})

export const {Add, Remove, Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;