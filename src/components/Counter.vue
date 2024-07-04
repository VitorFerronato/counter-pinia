<template>
  <div class="count">
    {{ counterStore.count }}
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>
