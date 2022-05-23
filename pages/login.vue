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
      <h1>Hola de Nuevo!</h1>
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

          <div class="password">
            <ValidationProvider v-slot="validationContext" name="password" :rules="{required, min:12, regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/}">
              <b-form-group id="password-group" label="Contraseña:" label-for="password-input">
                <b-form-input
                  v-if="showPassword"
                  id="password-input"
                  v-model="password"
                  class="password-input"
                  type="text"
                  :state="getValidationState(validationContext)"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <b-form-input
                  v-else
                  id="password-input"
                  v-model="password"
                  class="password-input"
                  type="password"
                  :state="getValidationState(validationContext)"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <div v-if="showPassword" class="toggleShow">
                  <b-button @click="toggleShow">
                    <b-icon icon="eye-slash-fill" />
                  </b-button>
                </div>
                <div v-else class="toggleShow">
                  <b-button @click="toggleShow">
                    <b-icon icon="eye-fill" />
                  </b-button>
                </div>
                <b-form-invalid-feedback id="password-input-feedback">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>

          <b-button type="submit" variant="primary">
            Ingresar
          </b-button>
        </b-form>
      </ValidationObserver>
      <p>
        ¿Olvidaste tu contraseña?
        <nuxt-link to="/notifyCode">
          haz click aqui para recuperarla!
        </nuxt-link>
      </p>
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
  max-width: 29.7%;
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
.login-main p {
  color: ghostwhite;
}

.login-main a {
  text-decoration: none;
  color: #fbc312;
}

.login-main input[type="text"] {
  width: 100%;
}

.login-main .password {
  display: inline-block;
  width: 100%;
}
.login-main #password-input {
  width: 91.2%;
  margin: 0%;
  display: inline-block;
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

.login-main .password .toggleShow{
  display: inline-block;
  background-color: ghostwhite;
  margin:0%;
  height: 40px;
  width:38px;
  border-radius: 8px;
}
.login-main .password .toggleShow button{
  display: inline-block;
  text-align: center;
  background-color: ghostwhite;
  margin:0%;
  padding: 0%;
  padding-top: 10%;
  width: 100%;
  height: 100%;
}
</style>
