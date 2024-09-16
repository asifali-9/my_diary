import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  textStyle: {
    id: 1,
    sliderValue: 18,
    minSliderValue: 10,
    maxSliderValue: 50,
    defaultColor: '#e2e8f0',
    textColors: ['#e2e8f0', '#000000', '#dc2626', '#16a34a', '#9333ea', '#0d9488', '#eab308', '#db2777', '#ca8a04', '#be185d']
  }
};

export const textStyleSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    updateTextStyle: (state, action) => {
        if(action.payload.from === 'slider' && action.payload.action === 'updateSliderValue'){
            state.textStyle.sliderValue = action.payload.value
        }
        if(action.payload.from === 'color' && action.payload.action === 'updateDefaultColor'){
            state.textStyle.defaultColor = action.payload.value
        }
    },
  },
});

export const { updateTextStyle } = textStyleSlice.actions;

export default textStyleSlice.reducer;
