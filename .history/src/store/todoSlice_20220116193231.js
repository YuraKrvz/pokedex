import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [],
   },
   reducers: {
      Add(state, action){
         state.favorite.push( action.payload.name )
      },
      Remove(state, action){},
      Toggle(state, action){},
      
   }
})