import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/CreateComponent')
    },
    {
        path: '/view',
        name: 'view',
        component: () => import('../components/ListComponent')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/EditComponent')
    },
]
const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;