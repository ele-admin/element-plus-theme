import { createApp } from 'vue';
import ElementPlus from 'element-plus/es';
import 'element-plus/theme-chalk/src/index.scss';
import App from './App.vue';
import router from './router';
import './styles/element-plus-theme/index.scss';
import './styles/dark.scss';
import './styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
