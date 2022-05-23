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
          <ValidationProvider v-slot="validationContext" name="code" rules="required|min:6">
            <b-form-group id="email-group" label="Codigo de Recuperación:" label-for="code-input">
              <b-form-input
                id="code-input"
                v-model="code"
                type="number"
                :state="getValidationState(validationContext)"
                placeholder="Ingresa tu codigo de recuperación"
                required
              />
              <b-form-invalid-feedback id="code-input-feedback">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="validationContext" name="newPassword" :rules="{required, min:12, regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/}">
            <b-form-group id="new-password-group" label="Nueva Contraseña:" label-for="new-password-input">
              <b-form-input
                id="password-input"
                v-model="newPassword"
                class="new-password-input"
                type="password"
                :state="getValidationState(validationContext)"
                placeholder="Ingresa tu contraseña"
                required
              />
              <b-form-invalid-feedback id="new-password-input-feedback">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="validationContext" name="confirmPassword" :rules="{required, min:12, regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/}">
            <b-form-group id="new-password-group" label="Confirmar Contraseña:" label-for="confirm-password-input">
              <b-form-input
                id="confirm-password-input"
                v-model="confirmPassword"
                class="confirm-password-input"
                type="password"
                :state="getValidationState(validationContext)"
                placeholder="Confirma tu contraseña"
                required
              />
              <b-form-invalid-feedback id="confirm-password-input-feedback">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <b-button type="submit" variant="primary">
            Continuar
          </b-button>
        </b-form>
      </ValidationObserver>
      <p>
        ¿Ya tienes una cuenta?
        <nuxt-link to="/login">
          Inicia sesión dando click aqui!
        </nuxt-link>
      </p>
      <p>
        ¿Aún no tienes una cuenta?
        <nuxt-link to="/signup">
          Crea tu perfil hoy dando click aqui!
        </nuxt-link>
      </p>
      <p>
        ¿Aun no tienes un codigo de seguridad?
        <nuxt-link to="/notifyCode">
          Obten uno dando click aqui!
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>

import { restorePassword } from '~/endpoints/access.js'
export default {
  data () {
    return {
      email: '',
      code: '',
      newPassword: '',
      confirmPassword: '',
      changeValidated: 0,
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
    async submit () {
      const { data, error } = await restorePassword(this.email, this.code, this.newPassword, this.confirmPassword)
      if (data && !error) {
        this.changeValidated = data
        if (this.changeValidated === 2) {
          alert('se ha cambiado tu contraseña con exito')
          this.$router.push('/login')
        } if (this.changeValidated === 1) {
          alert('no puedes restaurar tu cuenta con tu contraseña anterior')
        } if (this.changeValidated === 4) {
          alert('Verifica que ambas contraseñas sean iguales y el codigo es valido')
        }
      } else {
        alert('Credenciales incorrectas')
      }
      this.changeValidated = 0
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
  margin-left: 16%;
  margin-right: 10%;
  margin-top: 4.5%;
  padding: 3%;
  border-radius: 20px;
  display: inline-block;
  color: #fbc312;
  width: 30%;
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
.login-main input[type="number"]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button  {
  -webkit-appearance: none
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
