import { statement } from "@babel/template"
import _ from 'lodash'; 



import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FECTH_STREAM ,
    DELETE_STREAM,
    EDIT_STREAM  ,
}from "../actions/types"






export default(state = {} , action ) => {
    switch(action.type){
        case FETCH_STREAMS:
            // take whatever object returned from the mapkey
            // then merging the object returned from the mapkeys into the state 
            return {...state, ..._.mapKeys(action.payload,'id')}
        case FECTH_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case DELETE_STREAM:
            return _.omit(state, action.payload)

        default:
            return state; 
    }




}