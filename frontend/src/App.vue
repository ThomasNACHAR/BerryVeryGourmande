<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Header from "./components/Header.vue"
</script>

<template>
  <Header />

  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
