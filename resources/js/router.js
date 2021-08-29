import Router from 'vue-router';

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base:'/',
    scrollBehavior(){
        return {x:0, y:0}
    },
    routes: [
    {
        path:'',
        component: () => import('./components/layouts/main/Main.vue'),
        children:[
            {
                path: '/',
                name:'stocks',
                component: () => import('./components/dashboard/Stocks.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/favorite_stocks',
                name:'favorites.stocks',
                component: () => import('./components/dashboard/FavoriteStocks.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/cryptocurrency',
                name:'cryptocurrency',
                component: () => import('./components/dashboard/Cryptocurrency.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/favorite_cryptocurrency',
                name:'favorites.cryptocurrency',
                component: () => import('./components/dashboard/FavoriteCryptocurrency.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/user_profile',
                name:'user.profile',
                component: () => import('./components/user_profile/UserProfile.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/full_info/:code',
                name:'full_info',
                component: () => import('./components/FullInfo.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
            {
                path: '/not_available',
                name:'not_available',
                component: () => import('./components/NotAvailable.vue'),
                meta: {
                    rule: 'editor',
                    requiresAuth:true
                }
            },
           
        ],
    },
    {
        path:'',
        component: () => import ('./components/layouts/main/FullPage.vue'),
        children:[
            {
                path: '/login',
                name:'login',
                component: () => import('./components/pages/Login.vue')
            },
            {
                path: '/register',
                name:'register',
                component: () => import('./components/pages/Register.vue')
            },
        ]
    },
    {
        path: '*',
        component: () => import('./components/pages/Page404.vue')
    },
    ]
})
export default router