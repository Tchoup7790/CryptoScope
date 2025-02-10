import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useCoinStore } from './stores/coin.store'

const app = createApp(App)

app.use(createPinia())

// init coin data
const coinStore = useCoinStore()

async function initializeApp() {
  await coinStore.initData()
  await coinStore.initCoinsChart()
  app.mount('#app')
}

initializeApp();
