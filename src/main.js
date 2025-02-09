import { createApp } from 'vue';
import ElementPlus from 'element-plus/es';
import 'element-plus/theme-chalk/src/index.scss';
import App from './App.vue';
import './styles/index.scss';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
