import React from 'react';
import {Field, formValues, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
 // connect this component to redux store 
import {connect} from 'react-redux'; 


// action creator 
import {createStream} from '../../actions/index'

class StreamCreate extends React.Component{
    


    // Dealing with creating the stream 
    onSubmit = (formValues) =>{ 
        // create Stream
        this.props.createStream(formValues);    
    }

    // 
    renderError ({error , touched}){
         if(touched && error){
             return(   
             <div className = "ui error message">
                 <div className = "header">
                     {error}
                 </div>
             </div>
             );
         }
    }



    renderInput = (formProps) => {
    
      
      return  (
                <div className = "field">
                  <label>{formProps.label}</label>
                  <input 
                    {...formProps.input}
                    autoComplete = "off"
                  /> 

                  <div>{this.renderError(formProps.meta)}</div>
                </div>
            ); 

    }


    render(){
        
        return(
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form error">
                <Field name = "title" component = {this.renderInput} label = "Enter the title"/>
                <Field name = "description" component = {this.renderInput} label = "Enter the Description"/>
             
             <button  className ="ui button primary" >submit</button>
            </form>

       );
    };
}


// Form validation 
const validate = (formValues)=>{
    
     const errors = {};
    
    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description'; 
    }

    return errors; 

}

/*
To make your form component communicate with the store, we need to wrap it with reduxForm,
 It will provide the props about the form state an function to handle the submit process.  
*/
const  formWrapped =  reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate); 

export default connect(null ,{createStream})(formWrapped);
 









