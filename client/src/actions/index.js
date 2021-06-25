import React from 'react';
import axios from 'axios'; 
import streams from '../apis/streams';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS ,
    FECTH_STREAM  ,
    DELETE_STREAM ,
    EDIT_STREAM   

} from './types';

import { async } from 'q';


// sign user in  
export const signIn = (userId)=>{
    return {type: SIGN_IN,
            payload: userId
        };
};


// sign user out 
export const signOut = () => {
    return {type: SIGN_OUT};
}


//action creator to create stream 
// get the user Id inside action creator 
// making use of the second argument getState of the function passed to the redux-thunk 
export const createStream = (formValues) =>
{
    return async(dispatch,getState)=>{
        // fetch user information  
        const { userId } = getState().auth; 

        // create stream api request 
        const response = await streams.post('/streams',{...formValues,userId}); 
        dispatch({type: CREATE_STREAM, payload: response.data});


        // Do some programmatic navigation
        // get the user back to the root route 
        history.push('/'); 


    };

}


// fetch the lists of streams
export const fetchStreams = ()=>{

    return async(dispatch)=>{
        const response = await streams.get('/streams');
        dispatch({type: FETCH_STREAMS, payload: response.data}); 
    }

}


// fetch the single user
export const fetchStream = (id)=>{
    return async(dispatch) =>{
        const response = await streams.get(`/streams/${id}`);
        dispatch({type: FECTH_STREAM , payload: response.data}); 
    }
}


// update 
export const editStream = (id,formvalues)=>{

    console.log(formvalues); 
    return async(dispatch) =>{
        // since we only wanna update the part of the properties
        // So we make use of the patch over here 
        const response = await streams.patch(`/streams/${id}`, formvalues);
        dispatch({type: EDIT_STREAM , payload: response.data}); 
        // return the streamList page
        history.push('/'); 
    }


    

}

// delete a stream 
export const deleteStream = (id) =>{
    return async(dispatch) =>{
        await streams.delete(`/streams/${id}`);
        dispatch({type: DELETE_STREAM, payload: id});
    }
}  


