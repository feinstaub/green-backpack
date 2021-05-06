import { createApp } from 'vue'
import { createStore } from "vuex"
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainPage from "./components/MainPage.vue"
import Section from "./components/Section.vue"
import store from './store'

const routes = [
  { path: "/", component: MainPage },
  { path: "/section/:section", component: Section },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
