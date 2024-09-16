import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: [

  ]
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
       state.data.push(action.payload);
      //  console.log(state.data)
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item)=> item.id !== action.payload)
    },
    updateData: (state, action) => {
      state.data.map((item, index)=> {
        if(item.id === action.payload.id){
          state.data[index] = action.payload
          
          // console.log(action.payload);
          
          
        }
        
        
      })
      // console.log('update action called called');
      // console.log(state.data);
      
      
    }
  },
});

export const { addData, deleteData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
