<template>
  <div class="app">
    <nav>
      <RouterLink to="/" class="link">Home</RouterLink> | 
      <RouterLink to="/about" class="link">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

nav {
  background-color: #343a40;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.link:hover {
  text-decoration: underline;
}
</style>
