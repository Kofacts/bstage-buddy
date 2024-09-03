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

// import { AdMob } from '@capacitor-community/admob';

const app = createApp(App)
import { AdMob } from '@capacitor-community/admob';

// Your AdMob App ID
// const ADMOB_APP_ID = 'ca-app-pub-4536763666052997/7534189018';

const initializeAdMob = async () => {
    try {
      const ADMOB_APP_ID = 'cca-app-pub-4536763666052997~5963739439'; // Replace with your AdMob App ID
  
      await AdMob.initialize({
        requestTrackingAuthorization: true,
        appId: ADMOB_APP_ID,
      });
  
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('Error initializing AdMob:', error);
    }
  };
  

// AdMob.initialize({
//     requestTrackingAuthorization: true,
//     testingDevices: ['YOUR_DEVICE_ID'], // Remove this in production
//     initializeForTesting: true,
//   });

app
.use(http)
.use(store)
.use(router)
.use(auth)
.mount('#app');

initializeAdMob();