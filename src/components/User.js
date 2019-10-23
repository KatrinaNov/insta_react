import React from 'react';

const User = (props) => {
    //с помощью деструктуризации вытаскиваем переменную мин. Аналогично, this.props.min 
    const {min, src, alt, name} = props;
    return (
        <a href="#" className={min ? "user min": "user"}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}

export default User;