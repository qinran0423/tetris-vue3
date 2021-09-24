<template>
  <div class="box">{{ props.type }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["type"]);

const typeToColor: any = {
  [0]: "grey",
  [1]: "#f66",
};

const color = computed(() => typeToColor[props.type]);
</script>

<style scoped>
.box {
  width: 20px;
  height: 20px;
  margin: 2px;
  background: v-bind(color);
}
</style>
