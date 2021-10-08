<script setup lang="ts">
import Game from "./components/Game.vue";
import { startGame } from "./game";
function start() {
  console.log("开始游戏");
  startGame();
}
</script>

<template>
  <div style="display: flex">
    <div>
      自己
      <Game></Game>
    </div>
    <div>
      对手
      <Game></Game>
    </div>
    <button @click="start">startGame</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
