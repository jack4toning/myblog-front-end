import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { actionLog } from './middlewares/actionLog';

import { blogReducer, recommendedBlogListReducer } from './slices';

const rootReducer = combineReducers({
  blog: blogReducer,
  recommendedBlogList: recommendedBlogListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
