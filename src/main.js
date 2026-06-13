import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置

// 启用全局战术样式
import './assets/main.css' 

const app = createApp(App)

app.use(router)
app.mount('#app')

console.log('%c 暗区突围 Wiki 战术终端已连线 ', 'background: #ffaa00; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 2px;');