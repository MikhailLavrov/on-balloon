import { createSlice } from '@reduxjs/toolkit'

export const callMeBackSlice = createSlice({
  name: 'callMeBack',
  initialState: {
    isSubmitted: false,
  },
  reducers: {
    callMeBackSubmit: (state, action) => {
      state.isSubmitted = action.payload
    },
  }
})

export const { callMeBackSubmit } = callMeBackSlice.actions

export default callMeBackSlice.reducer
