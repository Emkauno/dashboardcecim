<template>
  <div class="loginbody">
    <form class="login" @submit.prevent="login">
      <h1>Iniciar sesión</h1>
      <input required v-model="username" id="username" type="text" placeholder="Usuario" />
      <input required v-model="password" id="password" type="password" placeholder="Password" />
      <h3 v-if="$store.state.failedlogin" class="loginerror">Tus credenciales son incorrectas</h3>
      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(res => {
          localStorage.setItem("userlogged", true);
          console.log(res);
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(function(error) {
          store.commit("failed", true);
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss'>
.loginbody {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login {
  background: var(--white);
  border: 1px solid (--gray);
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  h1 {
    font-size: 23px;
    margin-bottom: 40px;
  }
  input {
    font-size: 15px;
    width: 300px;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid var(--white);
    background-color: var(--purple-light);
    transition: all 0.3s ease;
    color: var(--black);
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    &:focus {
      background-color: var(--white);
      border: 2px solid var(--blue);
      outline: none;
      color: var(--black-2);
    }
  }
  button {
    padding: 5px 20px;
    align-self: flex-end;
    border-radius: 8px;
    background: var(--blue-light);
    border: 1px solid var(--blue);
    color: var(--white);
    text-transform: uppercase;
    font-size: 12px;
  }
  .loginerror {
    margin: 0;
    color: var(--orange);
    margin-bottom: 25px;
    font-size: 15px;
    font-weight: 300;
  }
}
</style>