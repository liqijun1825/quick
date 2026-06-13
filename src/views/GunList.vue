<template>
  <div class="gun-list-page">
    <h2>暗区枪械库</h2>
    <div class="grid">
      <div v-for="gun in guns" :key="gun.id" class="gun-card" @click="goToDetail(gun.id)">
        <div class="gun-type">{{ gun.type }}</div>
        <div class="gun-name">{{ gun.name }}</div>
        <p>口径: {{ gun.caliber }}</p>
        <span class="detail-link">查看详情 ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const guns = [
  { id: 'akm', name: 'AKM', type: '突击步枪', caliber: '7.62x39mm' },
  { id: 'm4a1', name: 'M4A1', type: '突击步枪', caliber: '5.56x45mm' },
  { id: 'mp5', name: 'MP5', type: '冲锋枪', caliber: '9x19mm' },
  { id: 'mosin', name: '莫辛纳甘', type: '栓动步枪', caliber: '7.62x54mm' }
];

const goToDetail = (id) => {
  router.push({ name: 'GunDetail', params: { id } });
};
</script>

<style scoped>
.gun-list-page { background: #1a1a1a; min-height: 100vh; padding: 40px; color: #eee; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
.gun-card {
  background: #2a2a2a; border: 1px solid #444; padding: 20px;
  cursor: pointer; transition: 0.3s; position: relative;
}
.gun-card:hover { border-color: #ffaa00; transform: translateY(-5px); }
.gun-type { color: #888; font-size: 0.8rem; }
.gun-name { font-size: 1.5rem; margin: 10px 0; font-weight: bold; }
.detail-link { color: #ffaa00; font-size: 0.9rem; }
</style>