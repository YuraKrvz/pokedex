import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [],
   },
   reducers: {
      Add(state, action){
         state.favorite
      },
      Remove(state, action){},
      Toggle(state, action){},
      
   }
})