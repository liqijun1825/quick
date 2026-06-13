<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="tactical-frame">
    <!-- 顶部 HUD 导航 -->
    <header class="hud-header">
      <div class="header-left">
        <div class="logo" @click="router.push('/')">
          <span class="status-dot pulse"></span>
          DARKZONE<span class="intel-text">INTEL</span>
        </div>
      </div>
      <nav class="hud-nav">
        <router-link to="/" class="nav-item">系统概览</router-link>
        <router-link to="/guns" class="nav-item">枪械库</router-link>
        <div class="nav-item disabled">战术地图</div>
      </nav>
      <div class="header-right">
        <div class="coord">COORDS: 39.92 N | 116.46 E</div>
      </div>
    </header>

    <!-- 视口区域 -->
    <main class="viewport">
      <router-view v-slot="{ Component }">
        <transition name="glitch" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="hud-footer">
      <div class="status-info">[ STATUS: 连接稳定 ]</div>
      <div class="version">VER 2.0.4 - TACTICAL_DATABASE</div>
    </footer>
  </div>
</template>

<style scoped>
.tactical-frame { min-height: 100vh; display: flex; flex-direction: column; }
.hud-header { 
  height: 70px; display: flex; justify-content: space-between; align-items: center; 
  padding: 0 30px; border-bottom: 1px solid var(--border-color);
  background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 100;
}
.logo { font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px; font-size: 1.2rem; }
.intel-text { color: var(--tactical-orange); }
.status-dot { width: 8px; height: 8px; background: var(--tactical-green); border-radius: 50%; box-shadow: 0 0 10px var(--tactical-green); }
.pulse { animation: pulse-animation 2s infinite; }
@keyframes pulse-animation { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

.hud-nav { display: flex; gap: 40px; }
.nav-item { text-decoration: none; color: #555; font-size: 0.9rem; position: relative; transition: 0.3s; }
.nav-item:hover, .router-link-active { color: #fff; }
.router-link-active::after { content: ''; position: absolute; bottom: -10px; left: 0; width: 100%; height: 2px; background: var(--tactical-orange); }
.disabled { opacity: 0.2; cursor: not-allowed; }
.viewport { flex: 1; }
.hud-footer { height: 30px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; padding: 0 20px; font-size: 10px; color: #333; align-items: center; }

/* 故障转场动画 (Glitch Effect) */
.glitch-enter-active { animation: glitch-in 0.3s; }
.glitch-leave-active { animation: glitch-in 0.3s reverse; }
@keyframes glitch-in {
  0% { transform: translate(5px,0) skew(5deg); opacity: 0; }
  30% { transform: translate(-5px,0) skew(-10deg); opacity: 0.5; }
  100% { transform: translate(0,0) skew(0); opacity: 1; }
}
</style>