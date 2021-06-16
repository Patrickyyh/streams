import React from 'react';
import {Link} from 'react-router-dom'; 

// impor component 
import GoogleAuth from './GoogleAuth';

const Header = ()=>{
    return (
        <div className = "ui pointing menu">
            <Link to ="/" className = "item">Stream</Link>
            <div className = "right menu">
                <Link to  ="/" className = "item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>

        </div>

    ); 
}

export default Header;
 