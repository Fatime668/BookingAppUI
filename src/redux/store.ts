import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './slices/authSlice';

// const middleware = getDefaultMiddleware({
//   serializableCheck: false, // Disable serializable state check
// });

const store = configureStore({
  reducer: {
    authSlice: AuthSlice,
  },
  // middleware,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;