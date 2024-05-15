import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCostumes: {},
};

export const costumeSlice = createSlice({
  name: 'costume',
  initialState,
  reducers: {
    setSelectedCostume: (state, action) => {
      const { itemId, costume } = action.payload;
      state.selectedCostumes[itemId] = costume;
    },
    clearSelectedCostume: (state, action) => {
      const { itemId } = action.payload;
      delete state.selectedCostumes[itemId];
    },
    loadStateFromStorage: (state, action) => {
      return {
        ...state,
        selectedCostumes: action.payload,
      };
    },
  },
});

export const { setSelectedCostume, clearSelectedCostume, loadStateFromStorage } = costumeSlice.actions;


export default costumeSlice.reducer;
