import { combineReducers } from "redux";
import { calculatorReducer } from "./calculator/reducer";

export const rootReducer = combineReducers({
    calculator: calculatorReducer
});