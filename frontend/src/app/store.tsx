import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import employerReducer from "../features/employer/employerSlice";
import candidatesReducer from './../features/candidate/candidateSlice';


const store = configureStore({
    reducer: {
      [apiSlice.reducerPath] : apiSlice.reducer,
      candidatesReducer: candidatesReducer,
      employerReducer: employerReducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store