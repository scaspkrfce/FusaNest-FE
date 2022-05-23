import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min, regex } from 'vee-validate/dist/rules'

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
  message: 'el campo debe tener un mínimo de {min} caracteres',
})

extend('regex', {
  ...regex,
  message: 'la contraseña debe contener numeros, caracteres especiales y mayusculas',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
