import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAy2rDTAUwv8QnhnuOS3O74ryOKEoHGuXA",
  authDomain: "dashboardcecim.firebaseapp.com",
  databaseURL: "https://dashboardcecim.firebaseio.com",
  projectId: "dashboardcecim",
  storageBucket: "dashboardcecim.appspot.com",
  messagingSenderId: "999684276839",
  appId: "1:999684276839:web:7e9a2b9539552d3a874ac2",
  measurementId: "G-5DEQK8EWME",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
