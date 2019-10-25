import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';
import Spinner from './Spinner';

export default class Posts extends Component {
    // вызываем наш класс, получаем объект
    InstaService = new InstaService();
    // состояние нашего компонента
    state = {
        posts: [],
        error: false,
        loading: true
    }

    // lifecycle hooks
    componentDidMount() {
        this.updatePosts();
    }

    // обнoвление постов
    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false,
            loading: false
        });
        console.log(this.state.posts);
    }

    onError = () => {
        this.setState({
            error: true
        }) 
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo} 
                        alt={altname} 
                        name={name}
                        min/>
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr} 
                    </div>
            </div>
            )
        });
    }

    render() {
        const {error, posts, loading} = this.state;        

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
        // все посты которые сгенерировались
        const items = this.renderItems(posts); 
        return (
            <div className="left">                
                {items}
            </div>
        )
    }
}