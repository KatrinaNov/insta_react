import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';
import Spinner from './Spinner';

export default class Users extends Component {
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
        this.updateUsers();
    }

    // обнoвление постов
    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (posts) => {
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
            const {name, src, alt, id} = item;
            return (
                <div key={id}>
                    <User 
                        src={src} 
                        alt={alt} 
                        name={name}
                        min/>
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
            <div className="right">
                <User 
                    src="https://vokrug.tv/pic/news/3/1/9/0/3190153c5fed3506567053eb762beb09.jpg" 
                    alt="woman" 
                    name="Alex"
                />
                <div className="users__block">               
                    {items}
                </div>
            </div>
        )
    }
}