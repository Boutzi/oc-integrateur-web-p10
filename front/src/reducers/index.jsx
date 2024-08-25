import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";

const rootReducter = combineReducers({
    userReducer,
});

export default rootReducter;