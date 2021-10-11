import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import Vant from 'vant'
import { px2Rem } from "./utils/rem"
// import VConsole from "vconsole"
px2Rem(16)
const app = createApp(App);
app.use(store).use(Vant).use(router).mount('#app')
