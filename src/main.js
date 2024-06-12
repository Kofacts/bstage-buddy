// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import { createApp } from 'vue'
import './style.css'
import router from './router'; // Import the router file
import App from './App.vue'

import http        from './http';
import store       from './store';
import auth        from './plugins/auth';


const app = createApp(App)

app
.use(http)
.use(store)
.use(router)
.use(auth)
.mount('#app');