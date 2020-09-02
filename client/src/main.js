import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/index.css';
import 'vuetify/dist/vuetify.min.css';
import vuetify from '@/plugins/vuetify'
Vue.config.productionTip = false;
Vue.use(vuetify)
Vue.use(router)
Vue.mixin({
  // beforeRouteLeave :function (to, from ,next) {
  //   const token = localStorage.getItem("token");
  //   if (token !== undefined || token !== null) {
  //     console.log(to,from,next)
  //   console.log(this.$route.name)
  //     next()
  //   } else if(this.$route.name== "register" || this.$route.name== "login"){
  //     next()
  //   }else{
  //     next("login");
  //   }
  // },
  created: function () {
    // console.log("ok")
  }
})
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
