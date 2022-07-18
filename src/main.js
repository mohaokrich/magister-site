import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import './assets/css/styles.css'
import store from './utils/form-data'
import Vuex from 'vuex'


const app = createApp(App)

app.use(router)
app.use(store);
app.use(Vuex);
app.mount('#app')
