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
      <h3>Email:</h3>
      <p><input type="text" spellcheck="false"> </p>
      <h3>Contraseña:</h3>
      <p><input type="text" spellcheck="false"> </p>
      ¿Aún no tienes una cuenta?
      <nuxt-link to="/registro">
        Crea tu perfil hoy dando click aqui!
      </nuxt-link>
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
  margin-top: 13%;
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
.login-main h3 {
  color: ghostwhite;
  margin-top: 5%;
}
.login-main a {
  text-decoration: none;
  color: ghostwhite;
}
.login-main input[type="text"] {
  width: 80%;
}

</style>
