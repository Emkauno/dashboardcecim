<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" id="username" type="text" placeholder="Usuario" />
      <label>Password</label>
      <input required v-model="password" id="password" type="password" placeholder="Password" />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

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
          alert("Los datos no son correctos" + error.message);
        });
    }
  }
};
</script>

<style>
</style>