<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

// 模拟数据库
const guns = [
  { id: 'akm', name: 'AKM', cat: '突击步枪', caliber: '7.62x39', level: 4 },
  { id: 'm4a1', name: 'M4A1', cat: '突击步枪', caliber: '5.56x45', level: 5 },
  { id: 'mp5', name: 'MP5', cat: '冲锋枪', caliber: '9x19', level: 3 },
  { id: 'ax50', name: 'AX-50', cat: '栓动步枪', caliber: '.50 BMG', level: 6 }
];

// 动态筛选逻辑
const categories = ['全部', '突击步枪', '冲锋枪', '栓动步枪'];
const currentCat = ref('全部');

const filteredGuns = computed(() => {
  if (currentCat.value === '全部') return guns;
  return guns.filter(gun => gun.cat === currentCat.value);
});
</script>

<template>
  <div class="list-view">
    <div class="sidebar">
      <div class="sidebar-label">档案分类 // CATEGORY</div>
      <div 
        v-for="cat in categories" 
        :key="cat"
        class="filter-item" 
        :class="{ active: currentCat === cat }"
        @click="currentCat = cat"
      >
        {{ cat }}
      </div>
    </div>

    <div class="grid-container">
      <transition-group name="list" tag="div" class="grid-wrapper">
        <div v-for="gun in filteredGuns" :key="gun.id" class="gun-card" @click="router.push('/guns/' + gun.id)">
          <div class="gun-level">LVL.{{ gun.level }}</div>
          <div class="gun-preview">
             <div class="placeholder-img">{{ gun.id.toUpperCase() }}</div>
          </div>
          <div class="gun-info">
            <div class="gun-cat">{{ gun.cat }} // {{ gun.caliber }}</div>
            <div class="gun-name">{{ gun.name }}</div>
            <div class="card-footer">查看详细数据 ></div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.list-view { display: flex; padding: 40px; gap: 40px; }
.sidebar { width: 200px; flex-shrink: 0; }
.sidebar-label { font-size: 10px; color: #666; letter-spacing: 2px; margin-bottom: 20px; font-weight: bold; }
.filter-item { padding: 12px 0; color: #555; cursor: pointer; border-bottom: 1px solid #1a1a1a; transition: all 0.3s ease; position: relative; }
.filter-item:hover { color: #aaa; padding-left: 10px; }
.filter-item.active { color: var(--tactical-orange); border-bottom-color: var(--tactical-orange); padding-left: 10px; font-weight: bold; }
.filter-item.active::before { content: '>'; position: absolute; left: -15px; color: var(--tactical-orange); }

.grid-wrapper { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; width: 100%; }
.gun-card { background: #080808; border: 1px solid #1a1a1a; position: relative; cursor: pointer; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.gun-card:hover { border-color: var(--tactical-orange); transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.5); z-index: 1; }
.gun-level { position: absolute; top: 10px; right: 10px; font-size: 10px; background: rgba(0,0,0,0.8); border: 1px solid var(--tactical-orange); padding: 2px 8px; color: var(--tactical-orange); z-index: 2;}
.placeholder-img { height: 160px; background: repeating-linear-gradient(45deg, #0a0a0a, #0a0a0a 10px, #0f0f0f 10px, #0f0f0f 20px); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 900; color: #222; letter-spacing: 5px;}
.gun-info { padding: 20px; background: linear-gradient(to top, #0f0f0f, transparent); }
.gun-cat { font-size: 10px; color: #666; font-family: 'Inter', sans-serif; }
.gun-name { font-size: 1.5rem; margin: 5px 0 15px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.8); }
.card-footer { font-size: 10px; color: var(--tactical-orange); text-align: right; opacity: 0; transition: opacity 0.3s; }
.gun-card:hover .card-footer { opacity: 1; }

/* 列表过渡动画 */
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(20px); }
</style>