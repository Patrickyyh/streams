import React from 'react'; 
import {BrowserRouter,Route} from 'react-router-dom'; 

// import all components from Stream 
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamCreate from  './streams/StreamCreate'; 
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

// how Does route work 



const App = ()=>{
    
    return(
        <div className = "ui container">
            
            <BrowserRouter>
              <div>
                <Header />
                <Route path = "/" exact component = {StreamList} />
                <Route path = "/streams/new" exact component = {StreamCreate} />
                <Route path = "/streams/edit" exact component = {StreamEdit} />
                <Route path = "/streams/delete" exact component = {StreamDelete} />
                <Route path = "/streams/show" exact component = {StreamShow} />
              </div>
            </BrowserRouter>
        </div>
     
    );
}

export default App; 