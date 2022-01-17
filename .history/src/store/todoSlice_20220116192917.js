import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favorite: [],
   },
   reducers: {
      Add(){},
      Remove(){},
      Toggle(){},
      
   }
})