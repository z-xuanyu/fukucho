/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-10 09:57:42
 * @LastEditTime: 2021-12-20 18:10:06
 * @Description: Modify here please
 */

import { defineStore } from 'pinia';
import { store } from '../index';


interface NavbarInfo {
    bgColor: string;
    textColor: string;
    logoUrl: string;
    scrollTop: number;
}

const appStore = defineStore({
    id: 'app-setting',
    state: () => ({
        navbar: {
            bgColor: "bg-white",
            textColor: 'text-color-primary',
            logoUrl: 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_header_220x.png',
            scrollTop: 0,
            menuLineColor: '#a58c78'
        },
    }),

    getters: {
        getNavbarInfo(): NavbarInfo {
            return this.navbar;
        },
        getMenuLineColor():string {
            return this.navbar.menuLineColor;
        }
    },

    actions: {
        // 改变导航颜色
        changeNavbarColor(bgColor: string = "bg-transparent", textColor: string = 'text-white', logoUrl: string = 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_header_white_220x.png', menuLineColor: string = '#FFFFFF'): void {
            this.navbar.bgColor = bgColor;
            this.navbar.textColor = textColor;
            this.navbar.logoUrl = logoUrl;
            this.navbar.menuLineColor = menuLineColor;
        },

        // 重置初始化导航颜色
        resetNavbarColor() {
            this.navbar.bgColor = 'bg-white';
            this.navbar.textColor = 'text-color-primary';
            this.navbar.logoUrl = 'https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_header_220x.png';
            this.navbar.menuLineColor = '#a58c78';

        },

        // 设置首页滚动高度
        setScrollTop(top: number): void {
            this.navbar.scrollTop = top;
        },
        // 首页导航二级导航展开，导航颜色改变
        navbarSubMenuHoverLeave(domId: string): void {
            const eleDisplayVal = getComputedStyle(document.getElementById(domId) as HTMLElement, null).getPropertyValue("display");
            if (eleDisplayVal == "none" && this.navbar.scrollTop < 120) {
                this.changeNavbarColor();
            }
        },

        // 停止body滚动
        stopBodyScroll(){
            (document.querySelector('body') as Element).classList.add("overflow-hidden");
        },

        // 默认body滚动
        resetBodyScroll(){
            (document.querySelector('body') as Element).classList.remove("overflow-hidden");
        }
    }
})


export function useAppStoreWithOut() {
    return appStore(store);
}