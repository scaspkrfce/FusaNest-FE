<template>
  <div>
    <AppNav />
    <div class="main">
      <Banner />
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/ui/AppNav.vue'
import Banner from '~/components/Banner.vue'
import { getProjects } from '~/endpoints/projects.js'

export default {
  components: {
    AppNav,
    Banner,
  },
  created () {
    getProjects()
  },
}
</script>
