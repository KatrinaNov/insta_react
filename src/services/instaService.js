// для работы сервера

export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        // проверка, прошел ли запрос на сервер
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        // помогает превратить из json формата в объект, обязательно нужно дождаться (await)
        return await res.json();
    }

        // метод , который получит все посты на сервере
    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }
    
}