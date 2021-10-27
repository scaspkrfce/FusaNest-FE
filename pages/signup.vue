<template>
  <div class="signup">
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
    <div class="signup-main">
      <h1>Crea tu cuenta hoy!</h1>
      <p>_________________________________________________________</p>
      <h3>Nombre:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Apellido:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Email:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Telefono:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Contraseña:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Confirmar contraseña:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <button>Continuar</button>
      <p>
        ¿Ya tienes una cuenta?
        <nuxt-link to="/login">
          Inicia sesión dando click aqui!
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
}
</script>

<style scoped>

.signup{
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

.signup-main {
  background-color: #2c3443;
  margin-left: 18%;
  margin-right: 10%;
  margin-top: 3%;
  padding: 3%;
  border-radius: 20px;
  display: inline-block;
  color: #fbc312;
}
.signup-main h1 {
  text-align: center;
  color: #fbc312;
  font-weight: 700;
}
.signup-main h3 {
  color: ghostwhite;
  margin-top: 5%;
}
.signup-main a {
  text-decoration: none;
  color: ghostwhite;
}
.signup-main input[type="text"] {
  width: 100%;
}
.signup-main button{
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
