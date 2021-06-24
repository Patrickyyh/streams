import { combineReducers } from "redux";

// import the reducer
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
//import reducer from redux form and bind it to 
// a new variable name which is formReducer 
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});