<template>
  <div class="admin">
    <AppNav />
    <Loading v-if="loading" class="main" />
    <div v-else-if="error">
      <h2>Lo sentimos! No hemos encontrado la información administrativa.</h2>
    </div>
    <div v-else class="main">
      <div class="message">
        Bienvenido {{ name }}!
      </div>
      <div class="data-container">
        <span class="label">Nombre:</span> {{ adminDetails.firstName }}
        <br>
        <span class="label">Apellido:</span> {{ adminDetails.surname }}
        <br>
        <span class="label">Documento:</span> {{ adminDetails.document }}
        <br>
        <span class="label">Cargo:</span> {{ adminDetails.jobTitle }}
        <br>
        <span class="label">Departamento:</span> {{ adminDetails.department }}
        <br>
        <span class="label">Tipo de Contrato:</span> {{ adminDetails.contractType }}
        <br>
        <span class="label">Fecha de Contratación:</span> {{ adminDetails.hiringDate }}
      </div>
      <div class="table-container">
        <b-table
          striped
          hover
          :items="adminsInfo"
          selectable
          select-mode="single"
          @row-selected="onRowSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>

import AppNav from '~/components/ui/AppNav.vue'
import Loading from '~/components/ui/Loading.vue'
import { getAdmins, getAdminDetails } from '~/endpoints/users.js'

export default {

  components: {
    AppNav,
    Loading,
  },
  data () {
    return {
      adminsInfo: null,
      loading: true,
      selected: undefined,
      error: false,
      adminDetails: undefined,
    }
  },
  computed: {
    name () {
      return this.$store?.state?.sesion?.userName || ''
    },
    id () {
      return this.$store?.state?.sesion?.id || ''
    },
    selectedId () {
      return this.$store?.state?.selectedId || ''
    },
  },
  async created () {
    const { data, error } = await getAdmins()
    if (!data && error) {
      this.error = error
    } else {
      this.adminsInfo = data
    }
    const currentUser = this.selectedId || this.id
    await this.getDetails(currentUser)
    this.loading = false
  },
  methods: {
    onRowSelected ([item]) {
      if (Object.keys(item || {}).length) {
        this.selected = item
        this.$store.commit('setSelectedId', item.adminId)
        this.getDetails(item.adminId)
      }
    },
    async getDetails (id) {
      const { data, error } = await getAdminDetails(id)
      if (!data && error) {
        this.error = error
      } else {
        this.adminDetails = data
      }
    },
  },

}
</script>

<style>
.main {
  background-color: #ebebeb;
}
body {
  background-color: #2c3443;
}
.main .project{
  background-color: #ebebeb;
  margin: 4%;
  padding: 2%;
  border-radius: 10px;
  color: #2c3443;
  border: 5px solid #2c3443;
}
.message {
  font-size: 2rem;
  margin-left: 4%;
  margin-top: 2%;
  color: #2c3443;
  font-weight: 900;
}
.data-container {
  padding: 2%;
  font-size: 1rem;
  margin: 4%;
  width: 90%;
  table-layout: fixed;
  border-radius: 10px;
  background-color: #2c3443;
  color: #ebebeb;
  height: 400px;
}
.data-container .label {
  display: inline-block;
  width: 210px;
  margin-right: 10px;
}

.table-container {
  font-size: 1rem;
  margin: 4%;
  overflow-y: scroll;
  width: 90%;
  table-layout: fixed;
  border-radius: 10px;
  background-color: #2c3443;
  height: 700px;
}

table {
  background-color: #ebebeb;
}

table th {
  background-color: #2c3443;
  color: #ebebeb;
}

</style>
