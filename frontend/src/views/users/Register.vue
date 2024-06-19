<template>
  <section
    class="fixed inset-0 flex justify-center items-center z-40"
    v-if="isRegister"
  >
    <div
      class="fixed bg-black opacity-40 inset-0 z-40 cursor-pointer"
      @click="closeRegisterModal"
    ></div>
    <div class="p-8 w-[350px] bg-white z-50 animation-modal rounded-md">
      <p class="text-3xl font-bold text-center mb-8">Inscription</p>
      <form @submit.prevent="handleRegister" class="flex flex-col gap-4">
        <div>
          <label for="first_name">Prénom:</label>
          <input
            class="input"
            type="text"
            name="first_name"
            v-model="formData.first_name"
          />
        </div>
        <div>
          <label for="last_name">Nom:</label>
          <input
            class="input"
            type="text"
            name="last_name"
            v-model="formData.last_name"
          />
        </div>
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
          <label for="phone">Téléphone (optionnel):</label>
          <input
            class="input"
            type="phone"
            name="phone"
            v-model="formData.phone"
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
        <button type="submit" class="button">S'inscrire</button>
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
        first_name: "",
        last_name: "",
        phone: "",
      },
    }
  },
  props: {
    isRegister: Boolean,
  },
  methods: {
    closeRegisterModal() {
      this.$emit("update:isRegister", false)
    },
    handleRegister() {
      fetch(this.API_URL + "users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Erreur d'inscription !")
          return response.json()
        })
        .then((data) => {
          this.$emit("update:isRegister", false)
          this.$emit("update:isLogin", true)
        })
        .then((error) => console.error(error))
    },
  },
}
</script>
