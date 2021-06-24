import React from 'react';
import {connect} from 'react-redux';
import { fetchStreams } from '../../actions/index';



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
                <button className = "ui button primary">
                    Edit
                </button>

                <button className = "ui button negative">
                    Delete
                </button>

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
                    {stream.title}
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
            </div>
        );

    }
   
}

const mapStateToProps = (state) =>{

    // adding the values of object into array to show the stream as the list 
    return {
        streams: Object.values(state.streams), 
        currentUserId: state.auth.userId 
    }; 

};

export default connect( mapStateToProps,{fetchStreams})(StreamList); 
