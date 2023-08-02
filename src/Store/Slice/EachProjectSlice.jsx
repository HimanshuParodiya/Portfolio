import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectImage: undefined,
  projectName: undefined,
  projectLiveDemo: undefined,
};

const eachProjectSlice = createSlice({
  name: "eachProject",
  initialState: initialState,
  reducers: {
    addEachProjectImage: (state, action) => {
      state.projectImage = action.payload;
    },
    addEachProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    addEachProjectLiveDemo: (state, action) => {
      state.projectLiveDemo = action.payload;
    },
  },
});

export const {
  addEachProjectImage,
  addEachProjectName,
  addEachProjectLiveDemo,
} = eachProjectSlice.actions;

export default eachProjectSlice.reducer;
