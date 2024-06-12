
/**
 * This would be the home of our stores.
 */
import {createStore} from 'vuex';
import { global } from './global';


const store = createStore({
    modules: {
        global,
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
