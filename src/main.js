import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import './assets/css/icon.css'
const app = createApp(App)

app
    .use(store)
    .use(router)
    .use(ElementPlus, { locale:localeZH })
    .mount('#app')