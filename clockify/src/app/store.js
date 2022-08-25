import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../features/auth/authSlice"
import goalReducer from "../features/goals/goalsSlice"
export const store = configureStore({
  reducer: {
  auth:authReducer,
  goal:goalReducer
  },
});
