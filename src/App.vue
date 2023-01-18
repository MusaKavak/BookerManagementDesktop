<template>
  <Navbar />
  <RouterView />
</template>
<script lang="ts" setup>
import Home from "./components/home.vue"
import Navbar from "./components/navbar.vue"
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>