
/**
 * This would be the home of our stores.
 */
import {createStore} from 'vuex';
import { global } from './global';
import { scripts } from './scripts';


const store = createStore({
    modules: {
        global,
        scripts,
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
