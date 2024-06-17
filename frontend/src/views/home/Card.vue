<template>
  <div
    class="w-full rounded-md shadow-lg bg-white p-8 relative flex flex-col justify-center items-center border-4 border-primary"
  >
    <div class="flex justify-center items-center">
      <div class="absolute top-0 -mt-20 bg-white rounded-full border-4 border-secondary shadow-lg">
        <img :src="card.image" :alt="card.alt" />
      </div>
    </div>
    <h2 class="font-bold text-xl mt-20 mb-4">{{ card.title }}</h2>
    <p>
      {{ card.message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>
