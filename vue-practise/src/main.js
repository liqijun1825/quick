import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置

/**
 * 如果你有关联全局样式需求，可以保留下面这行，
 * 但请确保 src/assets/ 目录下确实存在 base.css。
 * 如果没有，可以先注释掉，样式写在 App.vue 里。
 */
// import './assets/base.css' 

const app = createApp(App)

// 使用路由插件
// 必须在 mount 之前调用 use(router)
app.use(router)

// 挂载应用
app.mount('#app')

// 控制台提示，方便调试
console.log('%c 暗区突围 Wiki 系统已启动 ', 'background: #ffaa00; color: #000; font-weight: bold;');