<template>
  <div>
    <AppNav />
    <div v-if="loading">
      loading...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else class="main">
      <div v-for="item in projects" :key="item.projectId" class="project">
        <h2>{{ item.projectName }}</h2>
        <p>{{ item.projectDescription }}</p>
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
  background-color: ghostwhite;
  margin: 2%;
  padding: 0.5%;
}
</style>
