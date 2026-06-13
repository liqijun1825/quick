<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

// 模拟身份验证的交互状态
const isVerifying = ref(false);
const showTerminal = ref(false);
const verificationStatus = ref('');

const handleVerify = () => {
  if (isVerifying.value) return;
  showTerminal.value = true;
  isVerifying.value = true;
  verificationStatus.value = '正在建立安全加密链路...';
  
  const steps = [
    { time: 600, text: 'SECURE LINK ESTABLISHED // 安全链路已联线' },
    { time: 1300, text: 'SCANNING OPERATOR BIOMETRIC DATA... // 正在扫描特遣队员特征' },
    { time: 2200, text: 'ACCESS GRANTED // 验证通过。欢迎回到暗区，特遣队员。' }
  ];

  steps.forEach(step => {
    setTimeout(() => {
      verificationStatus.value = step.text;
      if (step.text.includes('GRANTED')) {
        isVerifying.value = false;
        // 动画结束后自动关闭终端弹窗
        setTimeout(() => { showTerminal.value = false; }, 1200);
      }
    }, step.time);
  });
};
</script>

<template>
  <div class="home-view">
    <div class="hero-overlay"></div>
    
    <div class="main-layout">
      
      <div class="content-body">
        <h2 class="sub-title">AUTHENTIC TACTICAL EXPERIENCE</h2>
        <h1 class="main-title">暗区突围<span class="infinite-tag">无限</span></h1>
        <p class="lore-text">
          在这里，撤离才是唯一的胜利。所有的装备信息、战术路径、改枪方案，尽在掌握。专为全前线特遣队员打造的数字化战术 Wiki 终端。
        </p>
        <div class="action-group">
          <button class="t-btn primary" @click="router.push('/guns')">进入武器库</button>
          <button class="t-btn secondary" @click="handleVerify">
            {{ isVerifying ? '认证中...' : '验证身份' }}
          </button>
        </div>
      </div>

      <div class="tactical-panel">
        <div class="panel-header">
          <span class="panel-title">// SYSTEM_DIAGNOSTICS</span>
          <span class="panel-blink">● LIVE LINK</span>
        </div>
        
        <div class="data-grid">
          <div class="data-item">
            <div class="data-label">前线环境级别</div>
            <div class="data-value hazard">CRITICAL // V</div>
          </div>
          <div class="data-item">
            <div class="data-label">战术改枪方案库</div>
            <div class="data-value">1,402,941</div>
          </div>
          <div class="data-item">
            <div class="data-label">安全撤离路线推荐</div>
            <div class="data-value link">3 ACTIVE</div>
          </div>
          <div class="data-item">
            <div class="data-label">终端核心负载</div>
            <div class="data-value">14.2%</div>
          </div>
        </div>

        <div class="terminal-log">
          <div class="log-line"><span class="log-time">[14:02:11]</span> INTEL: 农场暗区局势已全面刷新</div>
          <div class="log-line"><span class="log-time">[14:25:39]</span> WARNING: 检测到高价值物资集结热点</div>
          <div class="log-line"><span class="log-time">[15:00:02]</span> PROTOCOL: 全地图撤离点倒计时同步就绪</div>
        </div>
      </div>

    </div>

    <transition name="fade">
      <div v-if="showTerminal" class="verification-overlay">
        <div class="terminal-box">
          <div class="terminal-bar">TACTICAL MAIN INTERACTION SECURITY</div>
          <div class="terminal-content">
            <div class="loading-bar-bg">
              <div class="loading-bar-fill" :class="{ processing: isVerifying }"></div>
            </div>
            <p class="status-msg">> {{ verificationStatus }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.home-view {
  height: calc(100vh - 100px); 
  display: flex; 
  align-items: center;
  background: url('https://game.gtimg.cn/images/aqtw/cp/a20220615index/hero_bg.jpg') center/cover;
  position: relative;
  overflow: hidden; /* 严格防止溢出产生滚动条 */
}

.hero-overlay { 
  position: absolute; 
  inset: 0; 
  background: radial-gradient(circle at 20% 50%, rgba(5,5,5,0.2) 0%, #050505 85%); 
}

.main-layout {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

/* 左侧主内容样式优化 */
.content-body { flex: 1; max-width: 600px; }
.sub-title { color: var(--tactical-orange); letter-spacing: 5px; font-size: 0.85rem; font-weight: 600; }
.main-title { font-size: 4.5rem; margin: 10px 0; font-weight: 900; text-shadow: 0 0 30px rgba(255,170,0,0.3); letter-spacing: 2px; }
.infinite-tag { font-size: 1.5rem; color: #fff; background: #ff5500; padding: 2px 8px; margin-left: 15px; vertical-align: super; font-weight: 800; letter-spacing: 0; clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px); }
.lore-text { color: #999; line-height: 1.8; margin-bottom: 40px; border-left: 3px solid var(--tactical-orange); padding-left: 20px; font-size: 0.95rem; }

.action-group { display: flex; gap: 20px; }
.primary { background: var(--tactical-orange); color: #000; padding: 15px 40px; font-weight: bold; font-size: 0.9rem; }
.secondary { background: rgba(255,255,255,0.03); color: #fff; border: 1px solid #333; padding: 15px 35px; font-size: 0.9rem; }
.primary:hover { background: #fff; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,170,0,0.2); }
.secondary:hover { border-color: var(--tactical-orange); background: rgba(255,170,0,0.05); color: var(--tactical-orange); }

/* 右侧战术面板样式 */
.tactical-panel {
  width: 420px;
  background: rgba(8, 8, 8, 0.75);
  border: 1px solid #1a1a1a;
  backdrop-filter: blur(15px);
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
}
.panel-header { display: flex; justify-content: space-between; border-bottom: 1px solid #222; padding-bottom: 12px; margin-bottom: 20px; }
.panel-title { font-size: 11px; color: #666; font-weight: bold; letter-spacing: 1px; }
.panel-blink { font-size: 10px; color: var(--tactical-green); animation: pulse-animation 1.5s infinite; font-weight: bold; }

.data-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; }
.data-item { background: rgba(0,0,0,0.4); border: 1px solid #111; padding: 12px; }
.data-label { font-size: 10px; color: #444; margin-bottom: 5px; font-weight: bold; }
.data-value { font-size: 1.2rem; font-weight: bold; color: #eee; font-family: 'Orbitron', sans-serif; }
.data-value.hazard { color: #ff3333; text-shadow: 0 0 10px rgba(255,51,51,0.3); }
.data-value.link { color: var(--tactical-green); }

.terminal-log { background: #020202; padding: 15px; border: 1px solid #111; font-family: monospace; font-size: 11px; color: #555; height: 90px; display: flex; flex-direction: column; justify-content: space-between; }
.log-line { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.log-time { color: var(--tactical-orange); margin-right: 5px; }

/* 终端验证弹窗 Overlay 样式 */
.verification-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 999;
  display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px);
}
.terminal-box {
  width: 500px; background: #050505; border: 1px solid var(--tactical-orange);
  box-shadow: 0 0 30px rgba(255,170,0,0.2);
}
.terminal-bar { background: var(--tactical-orange); color: #000; font-size: 10px; font-weight: bold; padding: 6px 15px; letter-spacing: 1px; }
.terminal-content { padding: 30px; }
.loading-bar-bg { height: 3px; background: #111; position: relative; overflow: hidden; margin-bottom: 20px; border: 1px solid #222; }
.loading-bar-fill { height: 100%; width: 0; background: var(--tactical-orange); box-shadow: 0 0 10px var(--tactical-orange); }
.loading-bar-fill.processing { animation: loadBar 2.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards; }
.status-msg { font-family: monospace; font-size: 12px; color: #fff; margin: 0; }

@keyframes loadBar { 
  0% { width: 0; }
  30% { width: 35%; }
  70% { width: 75%; }
  100% { width: 100%; } 
}

/* 弹窗淡入淡出动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>