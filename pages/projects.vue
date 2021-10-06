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
      <div v-for="item in projects" :key="item.projectId">
        {{ item.projectName }}
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
