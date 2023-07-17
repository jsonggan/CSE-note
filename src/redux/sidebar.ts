import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface sidebarState {
  value: boolean
}

const initialState: sidebarState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    onSidebarChange: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSidebarChange } = sidebarSlice.actions;

export default sidebarSlice.reducer;