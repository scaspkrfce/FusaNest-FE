<template>
  <div class="admin">
    <AppNav />
    <div class="main">
      <div v-for="item in admins" :key="item.userId" class="user">
        <h2>{{ item.surname }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/ui/AppNav.vue'
import { getAdmins } from '~/endpoints/users.js'

export default {
  components: {
    AppNav,
  },
  data () {
    return {
      admins: null,
      loading: true,
      error: false,
    }
  },
  async created () {
    const { data, error } = await getAdmins()
    if (!data && error) {
      this.error = error
    } else {
      this.admins = data
    }
    this.loading = false
  },
}
</script>

<style>

</style>
