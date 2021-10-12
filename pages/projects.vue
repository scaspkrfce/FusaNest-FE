<template>
  <div>
    <AppNav />
    <div class="main">
      <div v-if="loading">
        loading...
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-for="item in projects" v-else :key="item.projectId" class="project">
        <h2>{{ item.projectName }}</h2>
        <p>{{ item.projectDescription }}</p>
        <p>Calificación: {{ item.projectRating }}/10</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/ui/AppNav.vue'
import { getProjects } from '~/endpoints/projects.js'

export default {
  components: {
    AppNav,
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
  padding: 0.5%;
  border-radius: 10px;
  color: #2c3443;
}
.project:hover{
  margin: 3.5%;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
}
</style>
