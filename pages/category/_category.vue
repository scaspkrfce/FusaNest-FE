<template>
  <div>
    <AppNav />
    <div v-if="loading" class="main">
      <div class="spinner-border" role="status">
        <span class="sr-only">Cargando...</span>
      </div>
    </div>
    <div v-else-if="error" class="no-projects">
      <h2>Lo sentimos! No hemos encontrado proyectos en esta categoría.</h2>
      <img src="../../assets/construction1.png">
    </div>
    <div v-else class="main">
      <div v-for="item in projects" :key="item.projectId" class="project">
        <h2>{{ item.projectName }}</h2>
        <p>{{ item.projectDescription }}</p>
        <p>Calificación: {{ item.projectRating }}/10</p>
        <img src="../../assets/Default.png">
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/ui/AppNav.vue'
import { getProjectsByCategory } from '~/endpoints/categories.js'

export default {
  components: {
    AppNav,
  },
  data () {
    return {
      projects: null,
      loading: true,
      error: false,
      url: this.$nuxt.$route.path,
    }
  },
  async created () {
    const { data, error } = await getProjectsByCategory(this.url)
    if (!data && error) {
      this.error = error
    } else {
      this.projects = data
    }
    this.loading = false
  },
}
</script>

<style scoped>

.project{
  background-color: #ebebeb;
  margin: 4%;
  padding: 2%;
  border-radius: 10px;
  color: #2c3443;
  border: 5px solid #fbc312;
}
.project:hover{
  margin: 3.6%;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
}
.spinner-border{
  color:ghostwhite;
  margin-left:4%;
  margin-top: 1%;
}
.no-projects{
  padding-top: 5%;
  background-color: #ebebeb;
  color: #2c3443;
  text-align: center;
}
.no-projects img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
}
</style>
