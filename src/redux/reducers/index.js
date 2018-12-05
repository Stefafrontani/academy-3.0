import { combineReducers } from "redux";
import toast from "./toast.js";
import weatherCards from "./weatherCards.js";

export default combineReducers({
    toast,
    weatherCards
});
