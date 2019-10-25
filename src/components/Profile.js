// вторая страница. Профиль
import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"/>
            <Palette/>
        </div>
    )
}

export default Profile;