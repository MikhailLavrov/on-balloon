import { createSlice } from '@reduxjs/toolkit'

export const callMeBackSlice = createSlice({
  name: 'callMeBack',
  initialState: {
    submitted: false
  },
  reducers: {
    callMeBackSubmit: (state, action) => {
      state.submitted = action.payload
    },
  }
})

export const { callMeBackSubmit } = callMeBackSlice.actions

export default callMeBackSlice.reducer
