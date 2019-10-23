import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"
            />
            <div className="users__block">
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"
                min/>
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"
                min/>
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"
                min/>
            <User 
                src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                alt="woman" 
                name="Alex"
                min/>
            </div>
            
        </div>
    )
}