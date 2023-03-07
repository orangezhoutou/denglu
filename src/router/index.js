import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const routes = [
    {
        path:'/denglu',
        component: () => import('@/views/DengLu/index')
    },
    {
        path:'/',
        component: () => import('@/firstpage/index')
    }
]


const router = new VueRouter({
    routes,
    mode:'history',
    base: process.env.BASE_URL,
})

export default router;