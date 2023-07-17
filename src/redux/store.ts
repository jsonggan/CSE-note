import { configureStore } from '@reduxjs/toolkit';
import pagePaddingReducer from './page-padding';
import sidebarReducer from './sidebar';
import noteContentReducer from './note-content';

export const store = configureStore({
  reducer: {
    pagePadding: pagePaddingReducer,
    sidebar: sidebarReducer,
    noteContent: noteContentReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// function of store just to give every components in react the access to the state