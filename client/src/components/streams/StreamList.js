import React from 'react';
import {connect} from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { Link } from 'react-router-dom'; 


class StreamList extends React.Component{
    
    componentDidMount(){
        this.props.fetchStreams(); 
    }


// helper function to check if the user is logged in
// If the user sign in ,then show the EDIT and DELETE button 
renderDeletAndEdit(stream){
    if(stream.userId === this.props.currentUserId && !!this.props.currentUserId){
        return (
            <div className = "right floated content">
               <Link to = {`/streams/edit/${stream.id}`} className ="ui button primary">Edit</Link>

                {/* <button className = "ui button negative">
                    Delete
                </button> */}

                <Link to = {`/streams/delete/${stream.id}`} className = "ui button negative">Delete</Link>

            </div>

        )
    }

}



// This helper function is responsible for rendering the create button 
// Identify if the user is sign in or not 
renderCreate(){
    if(this.props.isSignedIn){
        return (
            <div style = {{textAlign: 'right'}}>
                <Link to ="/streams/new" className = "ui button primary">
                  Create a Stream  
                </Link>
            </div>
        )
    }



}
    





 // render the list of video 
    renderList(){
        return this.props.streams.map(stream =>{
          return(
            <div className  = "item" key = {stream.id}>
                {this.renderDeletAndEdit(stream)}
                <i className = "large middle aligned icon camera"/>

                <div className = "content">
                   <Link to = {`/streams/${stream.id}`}> 
                     {stream.title}
                   </Link> 
                    <div className = "description">
                        {stream.description}
                    </div>
                </div>
                
            </div>

        );
          });

    }


    render(){
        return (
            <div>
                <h2> Streams </h2>
                <div className = "ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );

    }
   
}

const mapStateToProps = (state) =>{

    // adding the values of object into array to show the stream as the list 
    return {
        streams: Object.values(state.streams), 
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn, 
    }; 

};

export default connect( mapStateToProps,{fetchStreams})(StreamList); 
