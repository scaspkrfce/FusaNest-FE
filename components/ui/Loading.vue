<template>
  <div :class="{hasMainClass: 'main'}">
    <div class="spinner-border" role="status">
      <span class="sr-only">Cargando...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    hasMainClass: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.spinner-border{
  color:ghostwhite;
  margin-left: 4%;
  margin-top: 1%;
}
</style>
