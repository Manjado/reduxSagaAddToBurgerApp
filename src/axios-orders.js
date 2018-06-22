import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-c7214.firebaseio.com/'
});

export default instance;