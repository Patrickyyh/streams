import React from 'react'; 
import {BrowserRouter,Route} from 'react-router-dom'; 
// components 
const PageOne = ()=>{
    return <div>PageOnes</div>
}

const PageTwo = ()=>{
    return(
    
        <div>
            PageTwo
            <button>click me </button>    
        </div>
    );
}






const App = ()=>{
    
    return(
        <div>
            <BrowserRouter>
              <div>
                <Route path = "/" exact component = {PageOne} />
                <Route path = "/pagetwo" component = {PageTwo} />
              </div>
            </BrowserRouter>
        </div>
     
    );
}

export default App; 