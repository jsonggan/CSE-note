import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import pagePaddingConfig from '../data/style.json';

export interface pagePaddingState {
  value: number
}

const initialState: pagePaddingState = {
  value: pagePaddingConfig.pagePadding.minPadding,
}

export const pagePaddingSlice = createSlice({
  name: 'pagePadding',
  initialState,
  reducers: {
    onPaddingChange: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { onPaddingChange } = pagePaddingSlice.actions

export default pagePaddingSlice.reducer