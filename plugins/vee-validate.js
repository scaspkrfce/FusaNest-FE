import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Este campo es requerido',
})

extend('email', {
  ...email,
  message: 'Este campo debe ser un email',
})

extend('min', {
  ...min,
  message: '6 caracteres mínimos son requeridos',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
