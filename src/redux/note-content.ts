import { createSlice } from '@reduxjs/toolkit';

export interface noteContentState {
  heading1: string;
  heading2: string[];
  content: { [key: string]: string };
}

const initialState: noteContentState = {
  heading1: "",
  heading2: [],
  content: {},
}

export const noteContentSlice = createSlice({
  name: 'pagePadding',
  initialState,
  reducers: {
    onContentChange: (state, action) => {
      state.heading1 = action.payload.heading1;
      state.heading2 = action.payload.heading2;
      state.content = action.payload.content;
    },
  },
})

// Action creators are generated for each case reducer function
export const { onContentChange } = noteContentSlice.actions

export default noteContentSlice.reducer