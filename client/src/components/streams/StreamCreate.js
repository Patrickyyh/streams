import React from 'react';

 // connect this component to redux store 
import {connect} from 'react-redux'; 

// action creator 
import {createStream} from '../../actions/index';

import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
    


    // Dealing with creating the stream 
    onSubmit = (formValues) =>{ 
        // create Stream
        this.props.createStream(formValues);
    }


    render(){
        return(
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit = {this.onSubmit}/>
            </div>

       );
    };
}



export default connect(null ,{createStream})(StreamCreate);
 









