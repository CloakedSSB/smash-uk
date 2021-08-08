import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home.vue"
import Region from "../views/region.vue"

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/region/:regionCode', component: Region}
]

const router = new VueRouter({
    routes
})

export default router;