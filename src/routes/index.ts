/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-08 09:59:35
 * @LastEditTime: 2021-12-22 16:19:34
 * @Description: Modify here please
 */
import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useAppStoreWithOut } from '../store/modules/app';

const useAppStore = useAppStoreWithOut();
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    redirect: '/home',
    component: () => import("/@/layouts/index.vue"),
    meta: {
        title: "Layout",
        keepAlive: false,
    },
    children: [
        {
            path: '/home',
            name: 'Home',
            component: () => import("/@/views/home/index.vue"),
            meta: {
                title: "home",
                keepAlive: false,
            },
        },
        {
            path: '/news',
            name: 'News',
            component: () => import("/@/views/news/index.vue"),
            meta: {
                title: "news",
                keepAlive: false,
            },
        },
        {
            path: '/philosophy',
            name: 'Philosophy',
            component: () => import("/@/views/philosophy/index.vue"),
            meta: {
                title: "philosophy",
                keepAlive: false,
            },
        },
        {
            path: '/collections',
            name: 'Collections',
            component: () => import("/@/views/collection/index.vue"),
            meta: {
                title: "collections",
                keepAlive: false,
            },
        },
        {
            path: '/collections/all-goods',
            name: 'CollectionsAllGoods',
            component: () => import("/@/views/collection/AllGoods.vue"),
            meta: {
                title: "collections-all-goods",
                keepAlive: false,
            },
        },
        {
            path: '/collections/product/:id',
            name: 'CollectionsProduct',
            component: () => import("/@/views/collection/Product.vue"),
            meta: {
                title: "collections-product",
                keepAlive: false,
            },
        },
        {
            path: '/collections/product/detail/:id',
            name: 'CollectionsProductDetail',
            component: () => import("/@/views/collection/ProductDetail.vue"),
            meta: {
                title: "collections-product-detail",
                keepAlive: false,
            },
        },
        {
            path: '/stockist',
            name: 'Stockist',
            component: () => import("/@/views/stockist/index.vue"),
            meta: {
                title: "stockist",
                keepAlive: false,
            },
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import("/@/views/cart/index.vue"),
            meta: {
                title: "cart",
                keepAlive: false,
            },
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import("/@/views/login/index.vue"),
            meta: {
                title: "login",
                keepAlive: false,
            },
        },
        {
            path: '/user',
            name: 'User',
            component: () => import("/@/views/user/index.vue"),
            meta: {
                title: "user",
                keepAlive: false,
            },
        },
    ]
},
{
    path: '/checkouts',
    name: 'Checkouts',
    component: ()=> import("/@/views/checkouts/index.vue"),
    meta:{
        titile: 'checkouts',
        keepAlive: false,
    }
},
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("/@/layouts/Error.vue") },
] 

export const router = createRouter({
    routes,
    history: createWebHashHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 路由守卫
router.beforeEach((to, from)=>{
    if(to.name !== 'Home'){
        useAppStore.resetNavbarColor();
    }
})
export function setupRouter(app: App) {
    app.use(router);
}