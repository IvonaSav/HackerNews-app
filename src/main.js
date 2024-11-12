// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faComments, faShare, faStar } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faComments, faShare, faStar);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); 
app.mount('#app');
