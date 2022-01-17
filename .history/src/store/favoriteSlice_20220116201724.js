import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [ 2, 6, 10 ],
   },
   reducers: {
      Add(state, action){
         console.log(state)
         console.log(action)
         state.favorite.push( action.payload.name )
      },
      Remove(state, action){},
      Toggle(state, action){},
      
   }
})

export const {Add, Remove, Toggle} = favoriteSlice.actions;
export default favoriteSlice.reducer;