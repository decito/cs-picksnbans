import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import '@/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
