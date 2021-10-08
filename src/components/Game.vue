<template>
  <div class="game">
    <div class="row" v-for="row in gameRow" :key="row">
      <div v-for="col in gameCol" :key="col">
        <Box :type="map[row - 1][col - 1]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Box from "./Box.vue";
import { gameRow, gameCol, initGame } from "../game";
import { reactive } from "vue";

const map = reactive([]);
initGame(map);
</script>

<style scoped>
.row {
  display: flex;
}

.game {
  margin: 0 15px;
}
</style>
