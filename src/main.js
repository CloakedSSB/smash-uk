import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import vuetify from './plugins/vuetify'
import { initializeApp } from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBO_p7DSgloGKlw2Xxlde9QnqEkJideksY",
  authDomain: "smash-bros-uk.firebaseapp.com",
  databaseURL: "https://smash-bros-uk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smash-bros-uk",
  storageBucket: "smash-bros-uk.appspot.com",
  messagingSenderId: "634228887709",
  appId: "1:634228887709:web:6c32ed2f5a62ac284fc474",
  measurementId: "G-WZRTHF5LTJ"
};

initializeApp(firebaseConfig)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
