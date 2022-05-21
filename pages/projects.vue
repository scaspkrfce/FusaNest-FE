<template>
  <div>
    <AppNav />
    <Loading v-if="loading" class="main" />
    <div v-else-if="error" class="no-projects">
      Lo sentimos! No hemos encontrado proyectos en esta categoría.
      <p>______________________________________________________________________</p>
      <img src="../assets/construction1.png">
    </div>
    <div v-else class="main">
      <div v-for="item in projects" :key="item.projectId" class="project">
        <h2>{{ item.projectName }}</h2>
        <p>{{ item.projectDescription }}</p>
        <p>Calificación: {{ item.projectRating }}/10</p>
        <img src="../assets/Default.png">
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/ui/AppNav.vue'
import Loading from '~/components/ui/Loading.vue'
import { getProjects } from '~/endpoints/projects.js'

export default {
  components: {
    AppNav,
    Loading,
  },
  data () {
    return {
      projects: null,
      loading: true,
      error: false,
    }
  },
  async created () {
    const { data, error } = await getProjects()
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

.no-projects{
  padding-top: 3%;
  background-color: #ebebeb;
  color: #2c3443;
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
}
.no-projects img{
  display: block;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>
