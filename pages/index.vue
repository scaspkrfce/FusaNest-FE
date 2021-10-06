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

export default {
  components: {
    AppNav,
    Banner,
  },
}
</script>
