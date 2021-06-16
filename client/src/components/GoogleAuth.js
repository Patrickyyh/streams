import React from 'react';
class GoogleAuth extends React.Component{
    //intialize the state
    state ={isSignedIn: null}; 


   // be responsible for initializing the google auth api 
   componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init(
                {clientId: '183952423938-h27jqeeirl1ic7igefh7a5b00gro2gf4.apps.googleusercontent.com',
                 scope: 'email'
                }).then(()=>{
                    
                     this.auth = window.gapi.auth2.getAuthInstance(); 
                     // update the state and rerender the compoent 
                     this.setState({isSignedIn: this.auth.isSignedIn.get()})
                     // listen pass true this function 
                     this.auth.isSignedIn.listen(this.onAuthChange); 
                });
        });

   }

   onAuthChange = (term) =>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()}); 
        
   }


   // deal with sign in and sign out button 
   onSignInClick = ()=>{
      this.auth.signIn(); 
   }



   onSignOutClick = ()=>{
     this.auth.signOut(); 

  }  




   


   // This helper function be responsible for rendering the button
   // It depends on if the user is loggined in or out.  
   renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;

        }else if(this.state.isSignedIn){
            return(
                <button className = "ui red google button" onClick = {this.onSignOutClick}>
                    <i className= "google icon"/>
                    Sign out 
                </button>
            );

        
        }else{
            return(
                <button className = "ui red google button" onClick = {this.onSignInClick}>
                    <i className= "google icon"/>
                    Sign in with Google
                </button>
            );
       
       
        }
   }


    render(){
            return(
                    <div>{this.renderAuthButton()}</div>
            );
    }

}

export default GoogleAuth; 
