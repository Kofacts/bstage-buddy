import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;
axios.defaults.headers['credentials'] = 'same-origin'
axios.defaults.headers['Authorization'] = `Basic ${window.localStorage.getItem('auth_token_default')}`
axios.defaults.headers['app-id'] = process.env.VUE_APP_ID

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}