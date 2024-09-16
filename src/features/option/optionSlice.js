import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  options: [
    {id: 1, category: 'Note', type: 'Single page', selected: true},
    {id: 2, category: 'Story', type: 'Multi pages book', selected: false},
  ]
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addOption: (state, action) => {
       state.options.push(action.payload)
      //  console.log(state.options)
    },
    updateOption: (state, action) => {
       state.options.map((item, index)=> {
         if(item.id === action.payload.id){
          state.options[index] = action.payload;
        }
        // console.log(state.options);
        
        
      })
      // console.log(state.options);             

    },
  },
});

export const { addOption, updateOption } = optionSlice.actions;

export default optionSlice.reducer;
