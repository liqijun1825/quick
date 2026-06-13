/* 覆盖 GunDetail.vue 原有的相关样式 */
.detail-title { font-size: 4rem; margin: 0; color: #fff; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; }
.detail-desc { color: #888; margin: 20px 0 50px; line-height: 1.6; border-left: 2px solid var(--tactical-orange); padding-left: 15px; }

.stat-item { margin-bottom: 35px; }
.stat-meta { display: flex; justify-content: space-between; font-size: 12px; color: #aaa; margin-bottom: 8px; font-family: 'Inter', sans-serif; letter-spacing: 1px; }

/* 增加科技感的背景槽 */
.stat-bar-bg { height: 4px; background: #111; border: 1px solid #222; position: relative; overflow: hidden; }
/* 进度条的辉光与网格效果 */
.stat-bar-fill { 
  height: 100%; 
  background: var(--tactical-orange); 
  background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 10px 100%;
  box-shadow: 0 0 15px rgba(255,170,0,0.5); 
  transition: width 1.2s cubic-bezier(0.1, 0.9, 0.2, 1); 
}

.blueprint-box { 
  height: 400px; 
  background: #050505; 
  border: 1px solid #2a2a2a; 
  position: relative; 
  overflow: hidden; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  /* 添加类似雷达或蓝图的网格背景 */
  background-image: 
    linear-gradient(#111 1px, transparent 1px),
    linear-gradient(90deg, #111 1px, transparent 1px);
  background-size: 20px 20px;
}
.gun-name-bg { font-size: 8rem; font-weight: 900; color: #0a0a0a; transform: rotate(-10deg); user-select: none; }