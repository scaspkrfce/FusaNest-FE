<template>
  <div class="login">
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
    </div>
    <div class="login-main">
      <h1>Notificar a mi correo</h1>
      <p>_________________________________________________________</p>

      <ValidationObserver ref="form">
        <b-form @submit.prevent="onSubmit">
          <ValidationProvider v-slot="validationContext" name="email" rules="required|email">
            <b-form-group id="email-group" label="Email:" label-for="email-input">
              <b-form-input
                id="email-input"
                v-model="email"
                type="email"
                :state="getValidationState(validationContext)"
                placeholder="Ingresa tu email"
                required
              />
              <b-form-invalid-feedback id="email-input-feedback">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <b-button type="submit" variant="primary">
            Enviar
          </b-button>
        </b-form>
      </ValidationObserver>
      <p>
        ¿Aún no tienes una cuenta?
        <nuxt-link to="/signup">
          Crea tu perfil hoy dando click aqui!
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>

import { login } from '~/endpoints/users.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    onSubmit () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.submit()
      })
    },
    toggleShow () {
      this.showPassword = !this.showPassword
    },
    async submit () {
      const { data, error } = await login(this.email, this.password)
      if (data && !error) {
        this.$store.commit('setSesion', data)
        this.$router.push('/')
      } else {
        alert('El usuario o la contraseña son incorrectos')
      }
    },
  },
}
</script>

<style scoped>
.login{
  overflow: hidden;
}
.titleBar{
  display: inline-block;
  margin-left: 10%;
  margin-top: 21%;
  vertical-align: top;
}
.titleBar .logo {
  overflow: hidden;
  text-align: right;
  font-size: 1.5rem;
  display: inline-block;
  margin-bottom: 2.2%;
}
.titleBar .title {
  overflow: hidden;
  display: inline-block;
}
.titleBar .title a {
  color: #2c3443;
  margin: 0;
  font-weight: 900;
  font-size: 6rem;
  vertical-align: middle;
}

.titleBar .title a:hover {
  text-decoration: none;
}

.login-main {
  background-color: #2c3443;
  margin-left: 18%;
  margin-right: 10%;
  margin-top: 12%;
  padding: 3%;
  border-radius: 20px;
  display: inline-block;
  color: #fbc312;
}
.login-main h1 {
  text-align: center;
  color: #fbc312;
  font-weight: 700;
}
.login-main span{
  color: #fbc312;
  margin-top: 5%;
  font-size: 1.4rem;
}
.login-main span .invalid-feedback {
  color: ghostwhite;
  font-size: 1rem;
}
.login-main a {
  text-decoration: none;
  color: ghostwhite;
}
.login-main input[type="text"] {
  width: 100%;
}

.login-main button{
  background-color: #fbc312;
  text-align: center;
  border-radius: 8px;
  margin-top: 3.5%;
  margin-bottom: 5.5%;
  margin-left: 22.5%;
  font-weight: 700;
  font-size: 1.5rem;
  padding-left: 18%;
  padding-right: 18%;
  color: #2c3443;
}

</style>
