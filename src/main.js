import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).mount('#app')

new Vue(
    {
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
    }
)

Vue.config.productionTip = false