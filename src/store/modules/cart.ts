/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-21 10:26:23
 * @LastEditTime: 2021-12-21 18:25:02
 * @Description: 购物车
 */
import { defineStore } from 'pinia';
import { store } from '../index';

const cartStore = defineStore({
    id: 'cart-store',
    state: () => ({
        cartDrawerActive: false, // 购物车drawer
    }),
    getters: {
        getCartDrawerActive(): boolean {
            return this.cartDrawerActive;
        },
    },
    actions:{
        changeCartDrawerActive():void{
            this.cartDrawerActive = !this.cartDrawerActive;
        }
    }
})


export function useCartStoreWithOut() {
    return cartStore(store)
}