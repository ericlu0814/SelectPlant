import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import './style.css'

import App from './App.vue'
import router from './router'

import './assets/sass/all.sass'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(router)
app.mount('#app')
