import React from 'react';
import Loader from 'react-loader-spinner';


const Spinner = () => {
    return(
        <div className="container">
             <Loader type="Circles" color="#00BFFF" height={70} width={70}/>
        </div>       
    );  
}

export default Spinner;