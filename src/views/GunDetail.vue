<template>
  <div class="detail-page" v-if="gunInfo">
    <router-link to="/guns" class="back-link">← 返回仓库</router-link>
    <div class="content">
      <div class="info-box">
        <span class="tag">{{ gunInfo.type }}</span>
        <h1>{{ gunInfo.name }}</h1>
        <div class="stats">
          <div class="stat-item"><span>垂直后坐</span> <div class="bar"><div :style="{width: gunInfo.vRecoil + '%'}"></div></div></div>
          <div class="stat-item"><span>水平后坐</span> <div class="bar"><div :style="{width: gunInfo.hRecoil + '%'}"></div></div></div>
          <div class="stat-item"><span>有效射程</span> <strong>{{ gunInfo.range }}m</strong></div>
        </div>
        <p class="description">{{ gunInfo.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['id']);

const db = {
  akm: { name: 'AKM', type: '突击步枪', vRecoil: 75, hRecoil: 60, range: 80, desc: '经典的苏系步枪，威力巨大但后坐力极难控制，是暗区老手的首选。' },
  m4a1: { name: 'M4A1', type: '突击步枪', vRecoil: 40, hRecoil: 35, range: 90, desc: '北约制式武器，拥有极高的改装上限和射速。' }
};

const gunInfo = computed(() => db[props.id] || db['akm']);
</script>

<style scoped>
.detail-page { background: #0f0f0f; min-height: 100vh; padding: 60px; color: #fff; }
.back-link { color: #888; text-decoration: none; margin-bottom: 20px; display: block; }
.info-box { max-width: 600px; border-left: 4px solid #ffaa00; padding-left: 30px; }
.tag { background: #333; padding: 4px 10px; font-size: 0.8rem; }
.stats { margin: 30px 0; }
.stat-item { margin-bottom: 15px; }
.bar { height: 6px; background: #333; width: 200px; margin-top: 5px; }
.bar div { height: 100%; background: #ffaa00; }
.description { line-height: 1.6; color: #ccc; }
</style>