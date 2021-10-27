<template>
  <nav class="Navigation">
    <div class="linksBar">
      <div class="link">
        <nuxt-link to="/projects">
          Explorar
        </nuxt-link>
      </div>
      <div v-for="item in categories" :key="item.categoryId" class="link">
        <nuxt-link :to="'/category/'+item.categoryName">
          {{ item.categoryName }}
        </nuxt-link>
      </div>
      <div class="search">
        <input type="text" placeholder="Busqueda.." spellcheck="false">
        <button type="button">
          <b-icon icon="search" scale="0.8" style="color: #2c3443" />
        </button>
      </div>
    </div>

    <div class="titleBar">
      <div class="logo">
        <b-iconstack font-scale="5">
          <b-icon stacked icon="egg-fill" style="color: #2c3443" />
          <b-icon stacked icon="egg-fill" scale="0.8" style="color: ghostwhite" />
        </b-iconstack>
      </div>
      <div class="title">
        <nuxt-link to="/">
          FusaNest
        </nuxt-link>
      </div>
      <div v-if="sesion == undefined" class="account">
        <div class="accountLink">
          <nuxt-link to="/login">
            Login
          </nuxt-link>
        </div>
        <div class="accountLink">
          <nuxt-link to="/signup">
            Registrarse
          </nuxt-link>
        </div>
      </div>
      <div v-else class="account">
        <div class="accountLink">
          <nuxt-link to="/profile">
            Perfil
          </nuxt-link>
        </div>
        <div class="accountLink" @click="logout()">
          <div class="logout">
            Cerrar Sesión
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getCategories } from '~/endpoints/categories.js'
export default {
  name: 'Navigation',
  data () {
    return {
      categories: null,
      loading: true,
      error: false,
      sesion: undefined,
    }
  },
  async created () {
    const { data, error } = await getCategories()
    if (!data && error) {
      this.error = error
    } else {
      this.categories = data
      this.getSesion()
    }
    this.loading = false
  },
  methods:
  {
    getSesion () {
      this.sesion = this.$store.state.sesion
    },
    logout () {
      if (this.$nuxt.$route.path === '/') {
        window.location.reload()
      } else {
        window.location.href = '/'
      }
      this.$store.commit('logout')
    },
  },
}
</script>

<style scoped>

.linksBar {
  background: linear-gradient(90deg, #fbc312, #fcdc64);
  text-align: center;
  position: fixed;
  left: 0px;
  right: 0px;
  height: auto;
  top: 0;
  margin: 0;
  z-index: 9000;
  overflow: hidden;
}

.linksBar .link {
  display: inline-block;
  margin: 0;
  padding: 0.5%;
  white-space: nowrap;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: 100%;
  top: 0;
  font-size: 1.5rem;
}

.linksBar .link:hover {
  border-left: 1px solid #2c3443;
  border-right: 1px solid #2c3443;
}

.linksBar .link a {
  color: #2c3443;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
}

.linksBar .link a:hover {
  color: ghostwhite;
}

.linksBar .search {
  margin: 0;
  white-space: nowrap;
  padding-right: 5.4%;
  padding-top: 0.4%;
  overflow: hidden;
  float: right;
  vertical-align: central;
}

.fa-search {
  display: inline-block;
  color: #2c3443;
  font-size: 19px;
}

.linksBar .search input[type="text"] {
  border: none;
  width: 110%;
  padding: 2.5%;
  padding-left: 5.5%;
  background-color: #2c3443;
  color: ghostwhite;
  border-radius: 15px;
  overflow: hidden;
  font-size: 15px;
  outline: none;
}

.linksBar .search input::placeholder {
  color: ghostwhite;
  opacity: 0.8;
  font-size: 15px;
}

.linksBar .search button {
  border: none;
  background-color: #fcdc64;
  overflow: hidden;
  font-size: 1.5rem;
  padding-left: 0.5%;
  vertical-align: bottom;
}

.linksBar .search button:hover {
  cursor: pointer;
  color: ghostwhite;
}

.titleBar {
    background: linear-gradient(270deg, #fbc312, #fcdc64);
    margin-top: 57px;
    display: flex;
    width: 100%;
    align-items: center;
}

.titleBar .logo {
  overflow: hidden;
  width: 3.5%;
  text-align: right;
  font-size: 0.5rem;
}

.titleBar .title {
  width: 18%;
  overflow: hidden;
}

.titleBar .title a {
  color: #2c3443;
  margin: 0;
  font-weight: 900;
  font-size: 2.2rem;
  vertical-align: middle;
}

.titleBar .title a:hover {
  text-decoration: none;
}
.titleBar .account {
  width: 76%;
  text-align: right;
}

.titleBar .account .accountLink {
  display: inline-block;
  margin: 0;
  padding: 0.5%;
  white-space: nowrap;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: 100%;
  top: 0;
  font-size: 1.5rem;
}

.titleBar .account .accountLink:hover {
  border-left: 1px solid #2c3443;
  border-right: 1px solid #2c3443;
}

.titleBar .account .accountLink a {
  margin: 0;
  color: #2c3443;
  text-decoration: none;
  font-weight: 500;
}

.titleBar .account .accountLink a:hover {
  color: ghostwhite;
}

.titleBar .account .accountLink .logout:hover {
  color: ghostwhite;
  cursor: pointer;
}
</style>
