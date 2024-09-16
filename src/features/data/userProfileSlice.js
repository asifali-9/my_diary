import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {

  }
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    addSignupDetails: (state, action) => {
        state.userProfile =  action.payload
    //    console.log(state.userProfile)
    },
    isLogedIn: (state, action) => {
        if(state.userProfile.userName === action.payload.userName  && state.userProfile.password === action.payload.password){
            state.userProfile.isLogedIn = true
        }
        // console.log(state.userProfile);    
    },
    userLogout: (state, action) => {
        state.userProfile.isLogedIn = false
    }
  },

});

export const { addSignupDetails, isLogedIn, userLogout } = userProfileSlice.actions;

export default userProfileSlice.reducer;
