import { configureStore } from '@reduxjs/toolkit';
import userReducer from './globalReducers/userReducer';
export default configureStore({
  reducer: {
    userSlice: userReducer,
  },
});