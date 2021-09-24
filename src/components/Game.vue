<template>
  <div class="row" v-for="row in gameRow" :key="row">
    <div v-for="col in gameCol" :key="col">
      <Box :type="map[row - 1][col - 1]"></Box>
    </div>
  </div>
</template>

<script setup lang="ts">
import Box from "./Box.vue";
import { gameRow, gameCol, startGame } from "../game";
import { reactive } from "vue";

const map = reactive([]);
startGame(map);
</script>

<style scoped>
.row {
  display: flex;
}
</style>

function reactive(arg0: never[]) { throw new Error("Function not implemented.");
}
