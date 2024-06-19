<template>
  <header
    class="fixed p-8 w-full bg-primary flex justify-between items-center z-30"
  >
    <div>
      <RouterLink to="/">
        <img class="h-24" src="../assets/logo.png" alt="logo" />
      </RouterLink>
    </div>
    <nav>
      <div class="relative group">
        <button class="group nav-button">
          <span>Compte</span>
        </button>
        <div
          class="absolute p-8 bg-white rounded-md w-full left-0 opacity-0 group-hover:opacity-100 z-50"
          style="transition: opacity 0.3s ease-in-out"
        >
          <div
            class="absolute w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
          ></div>
          <div class="flex flex-col justify-center items-center gap-4">
            <button class="" @click="isLogin = true">Se connecter</button>
            <button @click="isRegister = true">S'inscrire</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <Login :isLogin @update:isLogin="isLogin = false" />
  <Register :isRegister @update:isRegister="isRegister = false" @update:isLogin="isLogin = true" />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Login from "../views/users/Login.vue"
import Register from "../views/users/Register.vue"

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      isLogin: false,
      isRegister: false,
    }
  },
}
</script>

<style></style>
