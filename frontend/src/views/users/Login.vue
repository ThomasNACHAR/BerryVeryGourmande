<template>
  <section
    class="fixed inset-0 flex justify-center items-center z-40"
    v-if="isLogin"
  >
    <div
      class="fixed bg-black opacity-40 inset-0 z-40 cursor-pointer"
      @click="closeLoginModal"
    ></div>
    <div class="p-8 w-[350px] bg-white z-50 animation-modal rounded-md">
      <p class="text-3xl font-bold text-center mb-8">Connexion</p>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <div>
          <label for="email">Adresse e-mail:</label>
          <input
            class="input"
            type="email"
            name="email"
            v-model="formData.email"
          />
        </div>
        <div>
          <label for="password">Mot de passe:</label>
          <input
            class="input"
            type="password"
            name="password"
            v-model="formData.password"
          />
        </div>
        <button type="submit" class="button">Se connecter</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      API_URL: import.meta.env.VITE_API_URL,
      formData: {
        email: "",
        password: "",
      },
    }
  },
  props: {
    isLogin: Boolean,
  },
  methods: {
    closeLoginModal() {
      this.$emit("update:isLogin", false)
    },
    handleLogin() {
      fetch(this.API_URL + "users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Erreur de connexion !")
          return response.json()
        })
        .then((data) => console.log(data))
        .then((error) => console.error(error))
    },
  },
}
</script>
