<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>暗区突围：硬核射击手游</h1>
      <p>这是一个充满未知和危险的战局。成功从暗区撤离是你的最终目标。</p>
      <router-link to="/guns" class="enter-btn">进入枪械库</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://game.gtimg.cn/images/aqtw/cp/a20220615index/hero_bg.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}
.enter-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 40px;
  background: #ffaa00;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
  transition: 0.3s;
}
.enter-btn:hover { background: #fff; }
</style>