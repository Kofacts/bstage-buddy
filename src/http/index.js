import axios from 'axios';
import { localStore } from '@/helpers/global';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;
axios.defaults.headers['credentials'] = 'same-origin'
axios.defaults.headers['Authorization'] = `Basic ${localStore.get('auth_token_default')}`
axios.defaults.headers['app-id'] = process.env.VUE_APP_ID

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}