/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Composables
import { createApp } from 'vue'
// Components
import App from './App.vue'
// State manager
import { createPinia } from 'pinia'


// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app.use(pinia).mount('#app')
