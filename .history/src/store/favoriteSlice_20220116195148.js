import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [{id: 1}],
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