import axios from 'axios';

// Configs for axios, specific url
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 7bc563b9aadc5bfe37634dc99f743c12f5e69f7703b5a05982defc239efe5f83'
    }
});