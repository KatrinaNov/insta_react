import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://img.rg.ru/img/content/174/33/99/bangkok_d_850.jpg" alt="inst"/>
                <Post src="https://realty.vesti.ru/uploads/pictures/pbig/articles/18975/6yfrK4LNNoch3aOA3x9vT1JAwWg3NoRf.jpg" alt="second"/>

            </div>
        )
    }
}