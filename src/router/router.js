import Vue from 'vue'
import VueRouter from 'vue-router'
import Help from '../components/Help'
Vue.use(VueRouter)
const routes = [
    { path: '/help', component: Help },
    // { path:'/post',component:Post}

]
const router = new VueRouter({
    mode: 'history',//去掉模拟的/#/
    routes
})
export default router