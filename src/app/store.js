import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import optionReducer from "../features/option/optionSlice";
import dataReducer from "../features/data/dataSlice"
import textStyleReducer from "../features/style/textStyleSlice"
import userProfileReducer from "../features/data/userProfileSlice"

export const store = configureStore({
    reducer: {
        optionReducer: optionReducer,
        dataReducer: dataReducer,
        textStyleReducer: textStyleReducer,
        userProfileReducer: userProfileReducer
    }

})