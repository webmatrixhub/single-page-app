/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";
Vue.use(VueSimplemde);
import md from "marked";
window.md = md


Vue.component("AppHome", require("./components/AppHome.vue"));
import router from "./Router/router.js";
import User from "./Helpers/User";


window.User = User;
window.EventBus = new Vue();
// console.log(User.loggedIn());
const app = new Vue({
  el: "#app",
  router
});
