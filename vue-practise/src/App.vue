<script setup lang="ts">
/**
 * 导入 useRouter 钩子以解决 TypeScript 报错
 * 在 Vue 3 中，这是处理路由跳转的标准做法
 */
import { useRouter } from 'vue-router';

// 获取路由实例
const router = useRouter();

// 定义点击 Logo 跳转首页的函数
const handleLogoClick = () => {
  router.push('/');
};
</script>

<template>
  <div id="app-container">
    <!-- 顶部导航栏 -->
    <nav class="main-nav">
      <!-- 修正点：使用 handleLogoClick 替代 $router.push -->
      <div class="logo" @click="handleLogoClick">
        <span class="orange">DARK</span>ZONE <span class="wiki">WIKI</span>
      </div>

      <div class="nav-links">
        <!-- router-link 是内置组件，不需要脚本处理，直接使用即可 -->
        <router-link to="/" class="nav-item">首页概览</router-link>
        <router-link to="/guns" class="nav-item">枪械百科</router-link>
        <span class="nav-item disabled">地图情报</span>
        <span class="nav-item disabled">出金记录</span>
      </div>

      <div class="status-bar">
        <span class="signal-icon"></span>
        系统联机中
      </div>
    </nav>

    <!-- 主内容渲染区域 -->
    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <!-- 页面切换时的淡入淡出动画 -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="global-footer">
      <div class="footer-line"></div>
      <p>仅供战术模拟参考 | 非官方游戏站</p>
    </footer>
  </div>
</template>

<style>
/* --- 全局样式基础 --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #050505; /* 极深背景 */
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #e0e0e0;
  -webkit-font-smoothing: antialiased;
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* --- 导航栏样式 --- */
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 64px;
  background: rgba(15, 15, 15, 0.98);
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(8px);
}

.logo {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
}

.logo .orange {
  color: #ffaa00;
}

.logo .wiki {
  color: #666;
  font-size: 0.9rem;
  margin-left: 4px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-item {
  text-decoration: none;
  color: #888;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* 路由激活状态（自动匹配当前页面） */
.router-link-active {
  color: #ffaa00 !important;
  text-shadow: 0 0 10px rgba(255, 170, 0, 0.3);
}

.nav-item:hover {
  color: #fff;
}

.nav-item.disabled {
  color: #333;
  cursor: not-allowed;
}

.status-bar {
  font-size: 0.75rem;
  color: #00ff66;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 102, 0.05);
  padding: 4px 12px;
  border: 1px solid rgba(0, 255, 102, 0.2);
}

.signal-icon {
  width: 6px;
  height: 6px;
  background: #00ff66;
  border-radius: 50%;
  box-shadow: 0 0 5px #00ff66;
}

/* --- 内容区与动画 --- */
.content-wrapper {
  flex: 1;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- 页脚样式 --- */
.global-footer {
  padding: 40px 0;
  text-align: center;
  background: #050505;
}

.footer-line {
  width: 50px;
  height: 2px;
  background: #ffaa00;
  margin: 0 auto 20px;
}

.global-footer p {
  font-size: 0.75rem;
  color: #444;
  letter-spacing: 1px;
}
</style>