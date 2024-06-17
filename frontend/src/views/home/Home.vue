<template>
  <section>
    <Banner />
    <div class="-mt-12 z-10 grid lg:grid-cols-3 gap-32 lg:gap-4 m-4">
      <Card v-for="card in cards" :key="card.title" :card="card" />
    </div>
  </section>
</template>

<script>
import Banner from "./Banner.vue"
import Card from "./Card.vue"
import peopleImage from "../../assets/people.png"
import walkingImage from "../../assets/walking-man.png"
import handshakeImage from "../../assets/handshake.png"

export default {
  components: {
    Banner,
    Card,
  },
  data() {
    return {
      cards: [
        {
          image: peopleImage,
          title: "Des Petits Groupes",
          message:
            "Vivez cette expérience gourmande en toute convivialité et sympathie avec les personnes de votre choix (10 personnes par groupe).",
          alt: "Personnes",
        },
        {
          image: walkingImage,
          title: "Des Belles Balades",
          message:
            "Un Food Tour proposé dans le coeur historique de Bourges, pour une découverture unique et gustative de la ville.",
          alt: "Homme marchant",
        },
        {
          image: handshakeImage,
          title: "Nos Partenaires Au Grand Coeur",
          message:
            "Notre meilleure sélection d’artisans de Bourges pour un moment des plus uniques.",
          alt: "Serrage de main",
        },
      ],
    }
  },
}
</script>
