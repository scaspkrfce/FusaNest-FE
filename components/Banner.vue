<template>
  <div class="banner">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="../assets/business1.jpg">
        <h3>Bienvenido a FusaNest!</h3>
        <nuxt-link to="/projects">
          Encuentra proyectos de tecnología en tu ciudad
        </nuxt-link>
        <p />
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/stock1.jpg">
        <h3>Invierte en Ideas para el Futuro</h3>
        <nuxt-link to="/registro">
          Explora nuestros modelos de inversión
        </nuxt-link>
        <p />
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/job1.jpg">
        <h3>Obten Financiamiento Para tus Proyectos</h3>
        <nuxt-link to="/registro">
          Crea tu cuenta hoy y has crecer tu negocio!
        </nuxt-link>
        <p />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
 .carousel-caption h3{
   -webkit-text-stroke: 0.5px #2c3443;
    font-size: 2.3rem;
    font-weight: 800;
    font-weight: 500;
    color: ghostwhite;
 }
 .carousel-caption a {
  color: ghostwhite;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
