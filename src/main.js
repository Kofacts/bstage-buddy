import { createApp } from 'vue'
import './style.css'
import router from './router'; // Import the router file
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router); // Use the imported router
// app.use(LocomotiveScrollPlugin)
app.mount('#app');