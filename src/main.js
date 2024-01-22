import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
createApp(App).mount('#app');
import router from './router';


const app = createApp(App);

app.use(router);
app.mount("#app")


