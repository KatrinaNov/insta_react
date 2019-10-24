import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
    return (
            <div>
               Упс! Сервер не работает. Просим прощение за неудобства.                
                <img src={img} alt="error"></img>
            </div>
    )
}

export default ErrorMessage;