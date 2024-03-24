import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
